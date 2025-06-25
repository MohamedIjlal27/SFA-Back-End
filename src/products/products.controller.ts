import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ProductDto } from '../common/dto/product.dto';

@ApiTags('Products')
@Controller('ic')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('items/list')
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully',
    type: [ProductDto],
  })
  async getProducts(): Promise<ProductDto[]> {
    return this.productsService.getProducts();
  }

  @Get('items/search')
  @ApiOperation({ summary: 'Search products' })
  @ApiResponse({
    status: 200,
    description: 'Products search completed',
    type: [ProductDto],
  })
  async searchProducts(@Query('q') query: string): Promise<ProductDto[]> {
    return this.productsService.searchProducts(query);
  }

  @Get('items/category/:category')
  @ApiOperation({ summary: 'Get products by category' })
  @ApiResponse({
    status: 200,
    description: 'Products by category retrieved successfully',
    type: [ProductDto],
  })
  async getProductsByCategory(@Param('category') category: string): Promise<ProductDto[]> {
    return this.productsService.getProductsByCategory(category);
  }

  @Get('items/:itemCode')
  @ApiOperation({ summary: 'Get product by item code' })
  @ApiResponse({
    status: 200,
    description: 'Product retrieved successfully',
    type: ProductDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  async getProductByCode(@Param('itemCode') itemCode: string): Promise<ProductDto | null> {
    return this.productsService.getProductByCode(itemCode);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Get all product categories' })
  @ApiResponse({
    status: 200,
    description: 'Categories retrieved successfully',
    type: [String],
  })
  async getCategories(): Promise<string[]> {
    return this.productsService.getCategories();
  }

  @Get('subcategories')
  @ApiOperation({ summary: 'Get product subcategories' })
  @ApiResponse({
    status: 200,
    description: 'Subcategories retrieved successfully',
    type: [String],
  })
  async getSubCategories(@Query('category') category?: string): Promise<string[]> {
    return this.productsService.getSubCategories(category);
  }
} 