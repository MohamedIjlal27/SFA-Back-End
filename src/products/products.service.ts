import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { 
  ProductDto, 
  PaginationDto, 
  PaginatedProductsResponseDto, 
  CreateProductDto, 
  UpdateProductDto, 
  BulkCreateProductDto, 
  ProductSearchDto, 
  ProductStatsDto 
} from '../common/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProductsPaginated(paginationDto: PaginationDto): Promise<PaginatedProductsResponseDto> {
    const { page, limit, search, category, subcategory, sortBy, sortOrder, companyId } = paginationDto;
    const skip = (page - 1) * limit;

    // Build where clause
    const whereClause: any = {
      isActive: true,
      companyId,
    };

    // Add search filter
    if (search) {
      whereClause.OR = [
        {
          itemCode: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ];
    }

    // Add category filter
    if (category) {
      whereClause.category = {
        contains: category,
        mode: 'insensitive',
      };
    }

    // Add subcategory filter
    if (subcategory) {
      whereClause.subCategory = {
        contains: subcategory,
        mode: 'insensitive',
      };
    }

    // Build order by clause
    const orderByClause: any = {};
    if (sortBy) {
      orderByClause[sortBy] = sortOrder || 'asc';
    } else {
      orderByClause.itemCode = 'asc';
    }

    // Get total count
    const total = await this.prisma.product.count({ where: whereClause });

    // Get paginated products
    const products = await this.prisma.product.findMany({
      where: whereClause,
      orderBy: orderByClause,
      skip,
      take: limit,
    });

    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    return {
      products: products.map(product => this.mapToProductDto(product)),
      total,
      page,
      limit,
      totalPages,
      hasNext,
      hasPrev,
    };
  }

  async getProducts(companyId: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        companyId,
      },
      orderBy: {
        itemCode: 'asc',
      },
    });

    return products.map(product => this.mapToProductDto(product));
  }

  async getProductByCode(itemCode: string, companyId: string): Promise<ProductDto | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
    });

    return product ? this.mapToProductDto(product) : null;
  }

  async searchProducts(query: string, companyId: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        companyId,
        OR: [
          {
            itemCode: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            category: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      orderBy: {
        itemCode: 'asc',
      },
    });

    return products.map(product => this.mapToProductDto(product));
  }

  async advancedSearch(searchDto: ProductSearchDto, companyId: string): Promise<ProductDto[]> {
    const { query, category, subcategory, minPrice, maxPrice, inStockOnly } = searchDto;

    const whereClause: any = {
      isActive: true,
      companyId,
    };

    // Add search query
    if (query) {
      whereClause.OR = [
        {
          itemCode: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          category: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ];
    }

    // Add category filter
    if (category) {
      whereClause.category = {
        contains: category,
        mode: 'insensitive',
      };
    }

    // Add subcategory filter
    if (subcategory) {
      whereClause.subCategory = {
        contains: subcategory,
        mode: 'insensitive',
      };
    }

    // Add price range filter
    if (minPrice !== undefined || maxPrice !== undefined) {
      whereClause.price = {};
      if (minPrice !== undefined) {
        whereClause.price.gte = minPrice;
      }
      if (maxPrice !== undefined) {
        whereClause.price.lte = maxPrice;
      }
    }

    // Add stock filter
    if (inStockOnly) {
      whereClause.qty = {
        gt: 0,
      };
    }

    const products = await this.prisma.product.findMany({
      where: whereClause,
      orderBy: {
        itemCode: 'asc',
      },
    });

    return products.map(product => this.mapToProductDto(product));
  }

  async getProductsByCategory(category: string, companyId: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        companyId,
        category: {
          contains: category,
          mode: 'insensitive',
        },
      },
      orderBy: {
        itemCode: 'asc',
      },
    });

    return products.map(product => this.mapToProductDto(product));
  }

  async getCategories(companyId: string): Promise<string[]> {
    const categories = await this.prisma.product.groupBy({
      by: ['category'],
      where: {
        isActive: true,
        companyId,
        category: {
          not: null,
        },
      },
      _count: {
        category: true,
      },
    });

    return categories
      .map(cat => cat.category)
      .filter(cat => cat !== null) as string[];
  }

  async getSubCategories(category: string | undefined, companyId: string): Promise<string[]> {
    const whereClause: any = {
      isActive: true,
      companyId,
      subCategory: {
        not: null,
      },
    };

    if (category) {
      whereClause.category = {
        contains: category,
        mode: 'insensitive',
      };
    }

    const subCategories = await this.prisma.product.groupBy({
      by: ['subCategory'],
      where: whereClause,
    });

    return subCategories
      .map(subCat => subCat.subCategory)
      .filter(subCat => subCat !== null) as string[];
  }

  async getTotalCount(companyId: string): Promise<number> {
    return this.prisma.product.count({
      where: {
        isActive: true,
        companyId,
      },
    });
  }

  async getProductStats(companyId: string): Promise<ProductStatsDto> {
    const [
      totalProducts,
      activeProducts,
      inStockProducts,
      outOfStockProducts,
      productsWithImages,
      totalCategories,
      priceStats,
    ] = await Promise.all([
      this.prisma.product.count({
        where: { companyId },
      }),
      this.prisma.product.count({
        where: { isActive: true, companyId },
      }),
      this.prisma.product.count({
        where: { isActive: true, qty: { gt: 0 }, companyId },
      }),
      this.prisma.product.count({
        where: { isActive: true, qty: { lte: 0 }, companyId },
      }),
      this.prisma.product.count({
        where: { isActive: true, imageUrl: { not: null }, companyId },
      }),
      this.prisma.product.groupBy({
        by: ['category'],
        where: { isActive: true, companyId },
        _count: { category: true },
      }),
      this.prisma.product.aggregate({
        where: { isActive: true, companyId },
        _sum: { price: true },
        _avg: { price: true },
      }),
    ]);

    // Calculate total inventory value
    const inventoryValue = await this.prisma.product.aggregate({
      where: { isActive: true, companyId },
      _sum: {
        price: true,
      },
    });

    const totalInventoryValue = inventoryValue._sum.price || 0;

    return {
      totalProducts,
      activeProducts,
      inStockProducts,
      outOfStockProducts,
      totalInventoryValue: Number(totalInventoryValue),
      averagePrice: Number(priceStats._avg.price) || 0,
      totalCategories: totalCategories.length,
      productsWithImages,
    };
  }

  async createProduct(data: CreateProductDto & { companyId: string }): Promise<ProductDto> {
    // Check if product with same itemCode already exists
    const existingProduct = await this.prisma.product.findUnique({
      where: {
        itemCode_companyId: {
          itemCode: data.itemCode,
          companyId: data.companyId,
        },
      },
    });

    if (existingProduct) {
      throw new ConflictException(`Product with item code ${data.itemCode} already exists`);
    }

    const product = await this.prisma.product.create({
      data: {
        itemCode: data.itemCode,
        description: data.description,
        category: data.category || '',
        subCategory: data.subCategory || '',
        categoryCode: data.categoryCode || '',
        uom: data.uom || '',
        price: data.price,
        qty: data.qty,
        imageUrl: data.imageUrl,
        discountAmount: data.discountAmount ?? 0,
        discountPercentage: data.discountPercentage ?? 0,
        isActive: data.isActive ?? true,
        companyId: data.companyId,
      },
    });

    return this.mapToProductDto(product);
  }

  async bulkCreateProducts(data: BulkCreateProductDto & { companyId: string }): Promise<ProductDto[]> {
    const { products, companyId } = data;

    // Check for duplicate item codes
    const itemCodes = products.map(p => p.itemCode);
    const existingProducts = await this.prisma.product.findMany({
      where: {
        itemCode: { in: itemCodes },
        companyId,
      },
    });

    if (existingProducts.length > 0) {
      const existingCodes = existingProducts.map(p => p.itemCode).join(', ');
      throw new ConflictException(`Products with item codes ${existingCodes} already exist`);
    }

    // Create all products in a transaction
    const createdProducts = await this.prisma.$transaction(
      products.map(productData => 
        this.prisma.product.create({
          data: {
            itemCode: productData.itemCode,
            description: productData.description,
            category: productData.category || '',
            subCategory: productData.subCategory || '',
            categoryCode: productData.categoryCode || '',
            uom: productData.uom || '',
            price: productData.price,
            qty: productData.qty,
            imageUrl: productData.imageUrl,
            discountAmount: productData.discountAmount ?? 0,
            discountPercentage: productData.discountPercentage ?? 0,
            isActive: productData.isActive ?? true,
            companyId,
          },
        })
      )
    );

    return createdProducts.map(product => this.mapToProductDto(product));
  }

  async updateProduct(itemCode: string, data: UpdateProductDto & { companyId: string }): Promise<ProductDto> {
    const existingProduct = await this.prisma.product.findUnique({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId: data.companyId,
        },
      },
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with item code ${itemCode} not found`);
    }

    const product = await this.prisma.product.update({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId: data.companyId,
        },
      },
      data: {
        description: data.description,
        category: data.category,
        subCategory: data.subCategory,
        categoryCode: data.categoryCode,
        uom: data.uom,
        price: data.price,
        qty: data.qty,
        imageUrl: data.imageUrl,
        discountAmount: data.discountAmount,
        discountPercentage: data.discountPercentage,
        isActive: data.isActive,
      },
    });

    return this.mapToProductDto(product);
  }

  async deleteProduct(itemCode: string, companyId: string): Promise<void> {
    const existingProduct = await this.prisma.product.findUnique({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with item code ${itemCode} not found`);
    }

    await this.prisma.product.delete({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
    });
  }

  async updateProductImage(itemCode: string, imageUrl: string, companyId: string): Promise<ProductDto> {
    const existingProduct = await this.prisma.product.findUnique({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with item code ${itemCode} not found`);
    }

    const product = await this.prisma.product.update({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
      data: {
        imageUrl,
      },
    });

    return this.mapToProductDto(product);
  }

  async updateProductStock(itemCode: string, qty: number, companyId: string): Promise<ProductDto> {
    if (qty < 0) {
      throw new BadRequestException('Quantity cannot be negative');
    }

    const existingProduct = await this.prisma.product.findUnique({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with item code ${itemCode} not found`);
    }

    const product = await this.prisma.product.update({
      where: {
        itemCode_companyId: {
          itemCode,
          companyId,
        },
      },
      data: {
        qty,
      },
    });

    return this.mapToProductDto(product);
  }

  private mapToProductDto(product: any): ProductDto {
    return {
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
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
} 