import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderDto, OrderResponseDto } from '../common/dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    const { customerId, salespersonId, items, jsonPayload, companyId } = createOrderDto;

    // Validate customer exists
    const customer = await this.prisma.customer.findFirst({
      where: { customerId, companyId },
    });

    if (!customer) {
      throw new NotFoundException(`Customer ${customerId} not found`);
    }

    // Validate salesperson exists
    const salesperson = await this.prisma.user.findFirst({
      where: { exeId: salespersonId, companyId },
    });

    if (!salesperson) {
      throw new NotFoundException(`Salesperson ${salespersonId} not found`);
    }

    // Get or create document numbering
    let documentNumbering = await this.prisma.documentNumbering.findFirst({
      where: { salespersonId, companyId },
    });

    if (!documentNumbering) {
      documentNumbering = await this.prisma.documentNumbering.create({
        data: {
          salespersonId,
          prefix: 'ORD',
          currentNumber: 1,
          companyId,
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
        companyId,
        status: 'Pending',
        jsonPayload: jsonPayload || JSON.stringify(createOrderDto),
        orderItems: {
          create: items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            discount: item.discount || 0,
            totalAmount: (item.unitPrice * item.quantity) - (item.discount || 0),
            companyId,
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    // Increment document numbering
    await this.prisma.documentNumbering.update({
      where: { id: documentNumbering.id },
      data: {
        currentNumber: documentNumbering.currentNumber + 1,
        lastUpdated: new Date(),
      },
    });

    return {
      orderId: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
      companyId: order.companyId,
    };
  }

  async getOrdersBySalesperson(salespersonId: string, companyId: string) {
    const orders = await this.prisma.order.findMany({
      where: { salespersonId, companyId },
      include: {
        customer: {
          select: {
            customerId: true,
            customerName: true,
            city: true,
            companyId: true,
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
      companyId: order.companyId,
    }));
  }

  async getOrderById(orderId: string, companyId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, companyId },
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
            companyId: true,
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
        companyId: item.companyId,
      })),
      totalAmount: order.orderItems.reduce(
        (sum, item) => sum + Number(item.totalAmount),
        0,
      ),
      companyId: order.companyId,
    };
  }

  async updateOrderStatus(orderId: string, status: string, companyId: string): Promise<OrderResponseDto> {
    const order = await this.prisma.order.update({
      where: { id: orderId, companyId },
      data: { status },
    });
    return {
      orderId: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
      companyId: order.companyId,
    };
  }

  // Temporary order items storage (in-memory for now, can be moved to Redis later)
  private tempOrderItems = new Map<string, any[]>();

  async storeTempOrderItems(sessionId: string, items: any[], companyId: string) {
    this.tempOrderItems.set(sessionId + ':' + companyId, items);
    return {
      sessionId,
      itemCount: items.length,
      companyId,
      message: 'Order items stored temporarily',
    };
  }

  async getTempOrderItems(sessionId: string, companyId: string) {
    return this.tempOrderItems.get(sessionId + ':' + companyId) || [];
  }

  async clearTempOrderItems(sessionId: string) {
    const deleted = this.tempOrderItems.delete(sessionId);
    return {
      sessionId,
      deleted,
      message: deleted ? 'Temporary order items cleared' : 'No items found to clear',
    };
  }

  async validateOrderItems(items: any[], companyId: string) {
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
          where: { itemCode_companyId: { itemCode: item.itemCode, companyId: item.companyId || companyId } },
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

  // New method for saving draft orders
  async saveDraftOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    try {
      const { customerId, salespersonId, items, jsonPayload, companyId } = createOrderDto;
      // Validate customer exists
      const customer = await this.prisma.customer.findFirst({
        where: { customerId, companyId },
      });
      if (!customer) {
        throw new NotFoundException(`Customer ${customerId} not found`);
      }
      // Validate salesperson exists
      const salesperson = await this.prisma.user.findFirst({
        where: { exeId: salespersonId, companyId },
      });
      if (!salesperson) {
        throw new NotFoundException(`Salesperson ${salespersonId} not found`);
      }
      // Get or create document numbering
      let documentNumbering = await this.prisma.documentNumbering.findFirst({
        where: { salespersonId, companyId },
      });
      if (!documentNumbering) {
        documentNumbering = await this.prisma.documentNumbering.create({
          data: {
            salespersonId,
            prefix: 'DRF',
            currentNumber: 1,
            companyId,
          },
        });
      }
      // Generate draft order number
      const orderNumber = `${documentNumbering.prefix}${documentNumbering.currentNumber.toString().padStart(6, '0')}`;
      // Create draft order with items
      const order = await this.prisma.order.create({
        data: {
          orderNumber,
          customerId,
          salespersonId,
          companyId,
          status: 'Draft',
          isDraft: true,
          jsonPayload: jsonPayload || JSON.stringify(createOrderDto),
          orderItems: {
            create: await Promise.all(items.map(async item => {
              // Get product by itemCode
              const product = await this.prisma.product.findUnique({
                where: { itemCode_companyId: { itemCode: item.productId, companyId } },
              });
              if (!product) {
                throw new NotFoundException(`Product ${item.productId} not found`);
              }
              return {
                productId: product.id, // Use the product's ID from the database
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                discount: item.discount || 0,
                totalAmount: (item.unitPrice * item.quantity) - (item.discount || 0),
                companyId,
              };
            })),
          },
        },
        include: {
          orderItems: true,
        },
      });
      // Increment document numbering
      await this.prisma.documentNumbering.update({
        where: { id: documentNumbering.id },
        data: {
          currentNumber: documentNumbering.currentNumber + 1,
          lastUpdated: new Date(),
        },
      });
      return {
        orderId: order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        companyId: order.companyId,
      };
    } catch (error) {
      throw error;
    }
  }

  // New method for getting draft orders by salesperson
  async getDraftOrdersBySalesperson(salespersonId: string, companyId: string) {
    const orders = await this.prisma.order.findMany({
      where: { salespersonId, isDraft: true, companyId },
      include: {
        customer: {
          select: {
            customerId: true,
            customerName: true,
            city: true,
            companyId: true,
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
      companyId: order.companyId,
    }));
  }

  // New method for converting draft order to regular order
  async convertDraftToOrder(orderId: string): Promise<OrderResponseDto> {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (!order.isDraft) {
      throw new BadRequestException('Order is not a draft');
    }

    // Get new order number for regular order
    let documentNumbering = await this.prisma.documentNumbering.findUnique({
      where: { salespersonId: order.salespersonId },
    });

    if (!documentNumbering) {
      documentNumbering = await this.prisma.documentNumbering.create({
        data: {
          salespersonId: order.salespersonId,
          companyId: order.companyId,
          prefix: 'ORD',
          currentNumber: 1,
        },
      });
    }

    const newOrderNumber = `${documentNumbering.prefix}${documentNumbering.currentNumber.toString().padStart(6, '0')}`;

    // Update the order
    const updatedOrder = await this.prisma.order.update({
      where: { id: orderId },
      data: {
        orderNumber: newOrderNumber,
        status: 'Pending',
        isDraft: false,
      },
    });

    // Increment document numbering
    await this.prisma.documentNumbering.update({
      where: { salespersonId: order.salespersonId },
      data: {
        currentNumber: documentNumbering.currentNumber + 1,
        lastUpdated: new Date(),
      },
    });

    return {
      orderId: updatedOrder.id,
      orderNumber: updatedOrder.orderNumber,
      status: updatedOrder.status,
      companyId: updatedOrder.companyId,
    };
  }

  async getProductsOrderedByCustomer(customerId: string, companyId: string) {
    // Find all order items for orders by this customer and company
    const orderItems = await this.prisma.orderItem.findMany({
      where: {
        companyId,
        order: {
          customerId,
          companyId,
        },
      },
      include: {
        product: true,
      },
    });
    // Use a map to ensure unique products
    const uniqueProductsMap = new Map();
    for (const item of orderItems) {
      if (item.product && !uniqueProductsMap.has(item.product.id)) {
        uniqueProductsMap.set(item.product.id, item.product);
      }
    }
    const uniqueProducts = Array.from(uniqueProductsMap.values());
    // Map to ProductDto
    return uniqueProducts.map(product => ({
      itemCode: product.itemCode,
      description: product.description,
      category: product.category || '',
      subCategory: product.subCategory || '',
      categoryCode: product.categoryCode || '',
      uom: product.uom || '',
      price: Number(product.price),
      qty: product.qty,
      imageUrl: product.imageUrl,
      discountAmount: Number(product.discountAmount),
      discountPercentage: Number(product.discountPercentage),
      isSaved: false,
      isSold: false,
      isNewShipment: false,
      companyId: product.companyId,
    }));
  }

  async getDraftOrdersByCustomer(customerId: string, companyId: string) {
    const orders = await this.prisma.order.findMany({
      where: {
        customerId,
        isDraft: true,
        companyId,
      },
      include: {
        customer: {
          select: {
            customerId: true,
            customerName: true,
            city: true,
            companyId: true,
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
      items: order.orderItems, // include items for frontend use
      companyId: order.companyId,
    }));
  }
} 