import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ProductDto, PaginationDto, PaginatedProductsResponseDto } from '../common/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProductsPaginated(paginationDto: PaginationDto): Promise<PaginatedProductsResponseDto> {
    const { page, limit, search, category, subcategory, sortBy, sortOrder, companyId } = paginationDto;
    const skip = (page - 1) * limit;

    // Build where clause
    const whereClause: any = {
      isActive: true,
      qty: { gt: 0 },
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
        companyId: product.companyId,
      })),
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
        qty: { gt: 0 },
        companyId,
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
      companyId: product.companyId,
    }));
  }

  async getProductByCode(itemCode: string, companyId: string): Promise<ProductDto | null> {
    const product = await this.prisma.product.findFirst({
      where: { itemCode, companyId },
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
      companyId: product.companyId,
    };
  }

  async searchProducts(query: string, companyId: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
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
      companyId: product.companyId,
    }));
  }

  async getProductsByCategory(category: string, companyId: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
        companyId,
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
      companyId: product.companyId,
    }));
  }

  async getCategories(companyId: string): Promise<string[]> {
    const categories = await this.prisma.product.findMany({
      where: {
        isActive: true,
        qty: { gt: 0 },
        companyId,
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

  async getSubCategories(category: string | undefined, companyId: string): Promise<string[]> {
    const whereClause: any = {
      isActive: true,
      qty: { gt: 0 },
      companyId,
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

  async getTotalCount(companyId: string): Promise<number> {
    return this.prisma.product.count({
      where: {
        isActive: true,
        qty: { gt: 0 },
        companyId,
      },
    });
  }

  async createProduct(data: any): Promise<ProductDto> {
    const product = await this.prisma.product.create({
      data: {
        itemCode: data.itemCode,
        description: data.description,
        category: data.category,
        subCategory: data.subCategory,
        categoryCode: data.categoryCode,
        uom: data.uom,
        price: data.price,
        qty: data.qty,
        imageUrl: data.imageUrl,
        discountAmount: data.discountAmount ?? 0,
        discountPercentage: data.discountPercentage ?? 0,
        isActive: data.isActive ?? true,
        companyId: data.companyId,
      },
    });
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
    };
  }

  async updateProduct(itemCode: string, data: any): Promise<ProductDto> {
    const product = await this.prisma.product.update({
      where: { itemCode_companyId: { itemCode, companyId: data.companyId } },
      data: {
        description: data.description,
        category: data.category,
        subCategory: data.subCategory,
        categoryCode: data.categoryCode,
        uom: data.uom,
        price: data.price,
        qty: data.qty,
        imageUrl: data.imageUrl,
        discountAmount: data.discountAmount ?? 0,
        discountPercentage: data.discountPercentage ?? 0,
        isActive: data.isActive ?? true,
      },
    });
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
    };
  }

  async deleteProduct(itemCode: string, companyId: string): Promise<void> {
    await this.prisma.product.delete({
      where: { itemCode_companyId: { itemCode, companyId } },
    });
  }
} 