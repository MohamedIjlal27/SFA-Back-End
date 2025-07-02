import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

interface Room {
  initiator: Socket | null;
  receiver: Socket | null;
}

interface ProductDetails {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  category?: string;
  description?: string;
}

@WebSocketGateway({
  namespace: 'discovery',
  transports: ['websocket', 'polling'],
  path: '/socket.io/',
  serveClient: false,
  pingInterval: 25000,
  pingTimeout: 60000,
  allowEIO3: true
})
export class MirrorGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  @WebSocketServer()
  server: Server;

  private rooms: Map<string, Room> = new Map();
  private readonly logger = new Logger(MirrorGateway.name);

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
    this.logger.log('Discovery namespace initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.logger.debug(`Transport used: ${client.conn.transport.name}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    // Don't immediately clean up rooms on disconnect, give time for reconnection
    setTimeout(() => {
      this.rooms.forEach((room, roomCode) => {
        if (room.initiator?.id === client.id || room.receiver?.id === client.id) {
          // Check if the client has already reconnected
          const isClientReconnected = Array.from(this.server.sockets.sockets.values()).some(
            socket => socket.id === client.id
          );
          
          if (!isClientReconnected) {
            // Notify the other client in the room about the disconnection
            const otherClient = room.initiator?.id === client.id ? room.receiver : room.initiator;
            otherClient?.emit('peerDisconnected');
            this.rooms.delete(roomCode);
            this.logger.log(`Room ${roomCode} cleaned up due to client disconnect`);
          } else {
            this.logger.log(`Client ${client.id} reconnected, keeping room ${roomCode}`);
          }
        }
      });
    }, 30000); // Wait 30 seconds before cleaning up
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, roomCode: string) {
    this.logger.log(`Client ${client.id} attempting to join room ${roomCode}`);
    this.logger.debug(`Client transport: ${client.conn.transport.name}`);
    this.logger.debug(`Current rooms: ${Array.from(this.rooms.keys()).join(', ')}`);
    
    let room = this.rooms.get(roomCode);

    if (!room) {
      this.logger.log(`Creating new room ${roomCode}`);
      // Create new room if it doesn't exist
      room = { initiator: client, receiver: null };
      this.rooms.set(roomCode, room);
      this.logger.log(`Room ${roomCode} created. Emitting roomCreated event`);
      client.emit('roomCreated', { roomCode });
      this.logger.log(`Room ${roomCode} created with initiator ${client.id}`);
      // Also emit joinedRoom for the initiator
      client.emit('joinedRoom', { roomCode });
      this.logger.log(`Initiator ${client.id} joined room ${roomCode}`);
    } else if (!room.receiver) {
      this.logger.log(`Adding receiver ${client.id} to room ${roomCode}`);
      // Join as receiver if spot is available
      room.receiver = client;
      this.rooms.set(roomCode, room);
      this.logger.log(`Notifying initiator ${room.initiator?.id} about peer connection`);
      room.initiator?.emit('peerConnected', { peerId: client.id });
      this.logger.log(`Emitting joinedRoom event to receiver ${client.id}`);
      client.emit('joinedRoom', { roomCode });
      this.logger.log(`Client ${client.id} joined room ${roomCode} as receiver`);
    } else {
      this.logger.warn(`Room ${roomCode} is full. Initiator: ${room.initiator?.id}, Receiver: ${room.receiver?.id}`);
      client.emit('roomFull', { roomCode });
      this.logger.warn(`Room ${roomCode} is full, rejected client ${client.id}`);
    }
  }

  @SubscribeMessage('productDetails')
  handleProductDetails(client: Socket, payload: { roomCode: string; productDetails: ProductDetails }) {
    const room = this.rooms.get(payload.roomCode);
    if (!room) {
      this.logger.warn(`Room ${payload.roomCode} not found for product details`);
      return;
    }

    // Only allow the initiator to send product details
    if (room.initiator?.id === client.id && room.receiver) {
      room.receiver.emit('productDetails', { productDetails: payload.productDetails });
      this.logger.log(`Product details sent to receiver in room ${payload.roomCode}`);
    } else {
      this.logger.warn(`Unauthorized product details send attempt in room ${payload.roomCode}`);
    }
  }

  @SubscribeMessage('offer')
  handleOffer(client: Socket, payload: { roomCode: string; offer: any }) {
    const room = this.rooms.get(payload.roomCode);
    if (room?.initiator?.id === client.id && room.receiver) {
      room.receiver.emit('offer', payload.offer);
      this.logger.log(`Offer sent to receiver in room ${payload.roomCode}`);
    }
  }

  @SubscribeMessage('answer')
  handleAnswer(client: Socket, payload: { roomCode: string; answer: any }) {
    const room = this.rooms.get(payload.roomCode);
    if (room?.receiver?.id === client.id && room.initiator) {
      room.initiator.emit('answer', payload.answer);
      this.logger.log(`Answer sent to initiator in room ${payload.roomCode}`);
    }
  }

  @SubscribeMessage('iceCandidate')
  handleIceCandidate(client: Socket, payload: { roomCode: string; candidate: any }) {
    const room = this.rooms.get(payload.roomCode);
    if (!room) {
      this.logger.warn(`Room ${payload.roomCode} not found for ICE candidate`);
      return;
    }

    const target = room.initiator?.id === client.id ? room.receiver : room.initiator;
    if (target) {
      target.emit('iceCandidate', payload.candidate);
      this.logger.log(`ICE candidate sent in room ${payload.roomCode}`);
    }
  }
} 