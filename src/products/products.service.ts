import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ProductDto } from '../common/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

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
} 