import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ProductDto, PaginationDto, PaginatedProductsResponseDto } from '../common/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProductsPaginated(paginationDto: PaginationDto): Promise<PaginatedProductsResponseDto> {
    const { page, limit, search, category, subcategory, sortBy, sortOrder } = paginationDto;
    const skip = (page - 1) * limit;

    // Build where clause
    const whereClause: any = {
      isActive: true,
      qty: { gt: 0 },
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
      products: products.map(product => ({
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
      })),
      total,
      page,
      limit,
      totalPages,
      hasNext,
      hasPrev,
    };
  }

  async getProducts(): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
      },
      orderBy: [
        { category: 'asc' },
        { subCategory: 'asc' },
        { itemCode: 'asc' },
      ],
    });

    return products.map(product => ({
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
    }));
  }

  async getProductByCode(itemCode: string): Promise<ProductDto | null> {
    const product = await this.prisma.product.findUnique({
      where: { itemCode },
    });

    if (!product) {
      return null;
    }

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
    };
  }

  async searchProducts(query: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
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
        ],
      },
      orderBy: [
        { category: 'asc' },
        { subCategory: 'asc' },
        { itemCode: 'asc' },
      ],
    });

    return products.map(product => ({
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
    }));
  }

  async getProductsByCategory(category: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
        category: {
          contains: category,
          mode: 'insensitive',
        },
      },
      orderBy: [
        { subCategory: 'asc' },
        { itemCode: 'asc' },
      ],
    });

    return products.map(product => ({
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
    }));
  }

  async getCategories(): Promise<string[]> {
    const categories = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
      },
      select: {
        category: true,
      },
      distinct: ['category'],
    });

    return categories
      .map(cat => cat.category)
      .filter(cat => cat !== null) as string[];
  }

  async getSubCategories(category?: string): Promise<string[]> {
    const whereClause: any = {
      isActive: true,
      qty: { gt: 0 },
    };

    if (category) {
      whereClause.category = {
        contains: category,
        mode: 'insensitive',
      };
    }

    const subCategories = await this.prisma.product.findMany({
      where: whereClause,
      select: {
        subCategory: true,
      },
      distinct: ['subCategory'],
    });

    return subCategories
      .map(subCat => subCat.subCategory)
      .filter(subCat => subCat !== null) as string[];
  }

  async getTotalCount(): Promise<number> {
    return this.prisma.product.count({
      where: {
        isActive: true,
        qty: { gt: 0 },
      },
    });
  }
} 