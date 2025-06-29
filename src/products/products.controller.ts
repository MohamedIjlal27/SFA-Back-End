import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ProductDto, PaginationDto, PaginatedProductsResponseDto } from '../common/dto/product.dto';

@ApiTags('Products')
@Controller('ic')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('items/list')
  @ApiOperation({ summary: 'Get all products (deprecated - use /items/paginated)' })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully',
    type: [ProductDto],
  })
  async getProducts(): Promise<ProductDto[]> {
    return this.productsService.getProducts();
  }

  @Get('items/paginated')
  @ApiOperation({ summary: 'Get products with pagination, search, and filtering' })
  @ApiResponse({
    status: 200,
    description: 'Paginated products retrieved successfully',
    type: PaginatedProductsResponseDto,
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (1-based)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Search query' })
  @ApiQuery({ name: 'category', required: false, type: String, description: 'Category filter' })
  @ApiQuery({ name: 'subcategory', required: false, type: String, description: 'Subcategory filter' })
  @ApiQuery({ name: 'sortBy', required: false, type: String, description: 'Sort field' })
  @ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], description: 'Sort order' })
  async getProductsPaginated(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 20,
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('subcategory') subcategory?: string,
    @Query('sortBy') sortBy: string = 'itemCode',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
  ): Promise<PaginatedProductsResponseDto> {
    const paginationDto: PaginationDto = {
      page: Math.max(1, page),
      limit: Math.min(100, Math.max(1, limit)), // Limit between 1 and 100
      search,
      category,
      subcategory,
      sortBy,
      sortOrder,
    };

    return this.productsService.getProductsPaginated(paginationDto);
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

  @Get('items/count')
  @ApiOperation({ summary: 'Get total product count' })
  @ApiResponse({
    status: 200,
    description: 'Total count retrieved successfully',
    type: Number,
  })
  async getTotalCount(): Promise<number> {
    return this.productsService.getTotalCount();
  }
} 