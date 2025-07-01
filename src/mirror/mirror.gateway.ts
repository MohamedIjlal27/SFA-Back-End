import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

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
  allowEIO3: true
})
export class MirrorGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private rooms: Map<string, Room> = new Map();

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    // Clean up rooms when clients disconnect
    this.rooms.forEach((room, roomCode) => {
      if (room.initiator?.id === client.id || room.receiver?.id === client.id) {
        // Notify the other client in the room about the disconnection
        const otherClient = room.initiator?.id === client.id ? room.receiver : room.initiator;
        otherClient?.emit('peerDisconnected');
        this.rooms.delete(roomCode);
      }
    });
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, roomCode: string) {
    let room = this.rooms.get(roomCode);

    if (!room) {
      // Create new room if it doesn't exist
      room = { initiator: client, receiver: null };
      this.rooms.set(roomCode, room);
      client.emit('roomCreated', { roomCode });
    } else if (!room.receiver) {
      // Join as receiver if spot is available
      room.receiver = client;
      this.rooms.set(roomCode, room);
      room.initiator?.emit('peerConnected', { peerId: client.id });
      client.emit('joinedRoom', { roomCode });
    } else {
      // Room is full
      client.emit('roomFull', { roomCode });
    }
  }

  @SubscribeMessage('productDetails')
  handleProductDetails(client: Socket, payload: { roomCode: string; productDetails: ProductDetails }) {
    const room = this.rooms.get(payload.roomCode);
    if (!room) return;

    // Only allow the initiator to send product details
    if (room.initiator?.id === client.id && room.receiver) {
      room.receiver.emit('productDetails', { productDetails: payload.productDetails });
    }
  }

  @SubscribeMessage('offer')
  handleOffer(client: Socket, payload: { roomCode: string; offer: any }) {
    const room = this.rooms.get(payload.roomCode);
    if (room?.initiator?.id === client.id && room.receiver) {
      room.receiver.emit('offer', payload.offer);
    }
  }

  @SubscribeMessage('answer')
  handleAnswer(client: Socket, payload: { roomCode: string; answer: any }) {
    const room = this.rooms.get(payload.roomCode);
    if (room?.receiver?.id === client.id && room.initiator) {
      room.initiator.emit('answer', payload.answer);
    }
  }

  @SubscribeMessage('iceCandidate')
  handleIceCandidate(client: Socket, payload: { roomCode: string; candidate: any }) {
    const room = this.rooms.get(payload.roomCode);
    if (!room) return;

    const target = room.initiator?.id === client.id ? room.receiver : room.initiator;
    target?.emit('iceCandidate', payload.candidate);
  }
} 