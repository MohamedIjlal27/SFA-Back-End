import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderDto, OrderResponseDto } from '../common/dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    const { customerId, salespersonId, items, jsonPayload } = createOrderDto;

    // Validate customer exists
    const customer = await this.prisma.customer.findUnique({
      where: { customerId },
    });

    if (!customer) {
      throw new NotFoundException(`Customer ${customerId} not found`);
    }

    // Validate salesperson exists
    const salesperson = await this.prisma.user.findUnique({
      where: { exeId: salespersonId },
    });

    if (!salesperson) {
      throw new NotFoundException(`Salesperson ${salespersonId} not found`);
    }

    // Get or create document numbering
    let documentNumbering = await this.prisma.documentNumbering.findUnique({
      where: { salespersonId },
    });

    if (!documentNumbering) {
      documentNumbering = await this.prisma.documentNumbering.create({
        data: {
          salespersonId,
          prefix: 'ORD',
          currentNumber: 1,
        },
      });
    }

    // Generate order number
    const orderNumber = `${documentNumbering.prefix}${documentNumbering.currentNumber.toString().padStart(6, '0')}`;

    // Create order with items
    const order = await this.prisma.order.create({
      data: {
        orderNumber,
        customerId,
        salespersonId,
        status: 'Pending',
        jsonPayload: jsonPayload || JSON.stringify(createOrderDto),
        orderItems: {
          create: items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            discount: item.discount || 0,
            totalAmount: (item.unitPrice * item.quantity) - (item.discount || 0),
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    // Increment document numbering
    await this.prisma.documentNumbering.update({
      where: { salespersonId },
      data: {
        currentNumber: documentNumbering.currentNumber + 1,
        lastUpdated: new Date(),
      },
    });

    return {
      orderId: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
    };
  }

  async getOrdersBySalesperson(salespersonId: string) {
    const orders = await this.prisma.order.findMany({
      where: { salespersonId },
      include: {
        customer: {
          select: {
            customerId: true,
            customerName: true,
            city: true,
          },
        },
        orderItems: {
          include: {
            product: {
              select: {
                itemCode: true,
                description: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return orders.map(order => ({
      id: order.id,
      orderNumber: order.orderNumber,
      customerId: order.customerId,
      customerName: order.customer.customerName,
      city: order.customer.city,
      status: order.status,
      createdAt: order.createdAt,
      totalAmount: order.orderItems.reduce(
        (sum, item) => sum + Number(item.totalAmount),
        0,
      ),
      itemCount: order.orderItems.length,
    }));
  }

  async getOrderById(orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        customer: {
          select: {
            customerId: true,
            customerName: true,
            addr1: true,
            addr2: true,
            addr3: true,
            city: true,
            phone1: true,
            phone2: true,
          },
        },
        orderItems: {
          include: {
            product: {
              select: {
                itemCode: true,
                description: true,
                uom: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return {
      id: order.id,
      orderNumber: order.orderNumber,
      customer: order.customer,
      status: order.status,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      items: order.orderItems.map(item => ({
        id: item.id,
        productId: item.productId,
        itemCode: item.product.itemCode,
        description: item.product.description,
        uom: item.product.uom,
        quantity: item.quantity,
        unitPrice: Number(item.unitPrice),
        discount: Number(item.discount),
        totalAmount: Number(item.totalAmount),
      })),
      totalAmount: order.orderItems.reduce(
        (sum, item) => sum + Number(item.totalAmount),
        0,
      ),
    };
  }

  async updateOrderStatus(orderId: string, status: string) {
    const order = await this.prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    return {
      orderId: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
    };
  }

  // Temporary order items storage (in-memory for now, can be moved to Redis later)
  private tempOrderItems = new Map<string, any[]>();

  async storeTempOrderItems(sessionId: string, items: any[]) {
    this.tempOrderItems.set(sessionId, items);
    return {
      sessionId,
      itemCount: items.length,
      message: 'Order items stored temporarily',
    };
  }

  async getTempOrderItems(sessionId: string) {
    const items = this.tempOrderItems.get(sessionId);
    if (!items) {
      throw new NotFoundException('No temporary order items found for this session');
    }
    return {
      sessionId,
      items,
      itemCount: items.length,
    };
  }

  async clearTempOrderItems(sessionId: string) {
    const deleted = this.tempOrderItems.delete(sessionId);
    return {
      sessionId,
      deleted,
      message: deleted ? 'Temporary order items cleared' : 'No items found to clear',
    };
  }

  async validateOrderItems(items: any[]) {
    const validationResults = [];

    for (const item of items) {
      const validation = {
        itemCode: item.itemCode,
        isValid: true,
        errors: [],
      };

      // Validate required fields
      if (!item.itemCode) {
        validation.isValid = false;
        validation.errors.push('Item code is required');
      }

      if (!item.quantity || item.quantity <= 0) {
        validation.isValid = false;
        validation.errors.push('Quantity must be greater than 0');
      }

      if (!item.unitPrice || item.unitPrice <= 0) {
        validation.isValid = false;
        validation.errors.push('Unit price must be greater than 0');
      }

      // Check if product exists
      if (item.itemCode) {
        const product = await this.prisma.product.findUnique({
          where: { itemCode: item.itemCode },
        });

        if (!product) {
          validation.isValid = false;
          validation.errors.push('Product not found');
        } else {
          // Check stock availability
          if (product.qty < item.quantity) {
            validation.isValid = false;
            validation.errors.push(`Insufficient stock. Available: ${product.qty}`);
          }
        }
      }

      validationResults.push(validation);
    }

    const isValid = validationResults.every(result => result.isValid);

    return {
      isValid,
      results: validationResults,
      summary: {
        totalItems: items.length,
        validItems: validationResults.filter(r => r.isValid).length,
        invalidItems: validationResults.filter(r => !r.isValid).length,
      },
    };
  }
} 