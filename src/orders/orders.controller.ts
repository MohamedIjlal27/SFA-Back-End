import { Controller, Post, Get, Body, Param, UseGuards, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CreateOrderDto, OrderResponseDto } from '../common/dto/order.dto';

@ApiTags('Orders')
@Controller('orders')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create-order')
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
    type: OrderResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid order data',
  })
  @ApiResponse({
    status: 404,
    description: 'Customer or salesperson not found',
  })
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get('salesperson/:salespersonId')
  @ApiOperation({ summary: 'Get orders by salesperson' })
  @ApiResponse({
    status: 200,
    description: 'Orders retrieved successfully',
  })
  async getOrdersBySalesperson(@Param('salespersonId') salespersonId: string) {
    return this.ordersService.getOrdersBySalesperson(salespersonId);
  }

  @Get(':orderId')
  @ApiOperation({ summary: 'Get order by ID' })
  @ApiResponse({
    status: 200,
    description: 'Order retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  async getOrderById(@Param('orderId') orderId: string) {
    return this.ordersService.getOrderById(orderId);
  }

  @Put(':orderId/status')
  @ApiOperation({ summary: 'Update order status' })
  @ApiResponse({
    status: 200,
    description: 'Order status updated successfully',
    type: OrderResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  async updateOrderStatus(
    @Param('orderId') orderId: string,
    @Body('status') status: string,
  ): Promise<OrderResponseDto> {
    return this.ordersService.updateOrderStatus(orderId, status);
  }

  // Order Items Management
  @Post('items/temp-store')
  @ApiOperation({ summary: 'Store temporary order items' })
  @ApiResponse({
    status: 201,
    description: 'Order items stored temporarily',
  })
  async storeTempOrderItems(
    @Body() items: any[],
    @Body('sessionId') sessionId: string,
  ) {
    return this.ordersService.storeTempOrderItems(sessionId, items);
  }

  @Get('items/temp-store/:sessionId')
  @ApiOperation({ summary: 'Get temporary order items' })
  @ApiResponse({
    status: 200,
    description: 'Temporary order items retrieved',
  })
  async getTempOrderItems(@Param('sessionId') sessionId: string) {
    return this.ordersService.getTempOrderItems(sessionId);
  }

  @Delete('items/temp-store/:sessionId')
  @ApiOperation({ summary: 'Clear temporary order items' })
  @ApiResponse({
    status: 200,
    description: 'Temporary order items cleared',
  })
  async clearTempOrderItems(@Param('sessionId') sessionId: string) {
    return this.ordersService.clearTempOrderItems(sessionId);
  }

  @Post('items/validate')
  @ApiOperation({ summary: 'Validate order items' })
  @ApiResponse({
    status: 200,
    description: 'Order items validated',
  })
  async validateOrderItems(@Body() items: any[]) {
    return this.ordersService.validateOrderItems(items);
  }
} 