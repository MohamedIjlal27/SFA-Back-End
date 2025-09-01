import { Controller, Get, Query, Param, UseGuards, Request, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
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

@ApiTags('Products')
@Controller('ic')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('items')
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully',
    type: [ProductDto],
  })
  async getAllProducts(@Request() req): Promise<ProductDto[]> {
    return this.productsService.getProducts(req.user.companyId);
  }

  @Get('items/list')
  @ApiOperation({ summary: 'Get all products (deprecated - use /items)' })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully',
    type: [ProductDto],
  })
  async getProducts(@Request() req): Promise<ProductDto[]> {
    return this.productsService.getProducts(req.user.companyId);
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
    @Request() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 20,
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('subcategory') subcategory?: string,
    @Query('sortBy') sortBy: string = 'itemCode',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc'
  ): Promise<PaginatedProductsResponseDto> {
    const paginationDto: PaginationDto = {
      page: Math.max(1, page),
      limit: Math.min(100, Math.max(1, limit)), // Limit between 1 and 100
      search,
      category,
      subcategory,
      sortBy,
      sortOrder,
      companyId: req.user.companyId,
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
  async searchProducts(@Query('q') query: string, @Request() req): Promise<ProductDto[]> {
    return this.productsService.searchProducts(query, req.user.companyId);
  }

  @Post('items/advanced-search')
  @ApiOperation({ summary: 'Advanced product search with filters' })
  @ApiResponse({
    status: 200,
    description: 'Advanced search completed',
    type: [ProductDto],
  })
  async advancedSearch(@Body() searchDto: ProductSearchDto, @Request() req): Promise<ProductDto[]> {
    return this.productsService.advancedSearch(searchDto, req.user.companyId);
  }

  @Get('items/category/:category')
  @ApiOperation({ summary: 'Get products by category' })
  @ApiResponse({
    status: 200,
    description: 'Products by category retrieved successfully',
    type: [ProductDto],
  })
  async getProductsByCategory(@Param('category') category: string, @Request() req): Promise<ProductDto[]> {
    return this.productsService.getProductsByCategory(category, req.user.companyId);
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
  async getProductByCode(@Param('itemCode') itemCode: string, @Request() req): Promise<ProductDto | null> {
    return this.productsService.getProductByCode(itemCode, req.user.companyId);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Get all product categories' })
  @ApiResponse({
    status: 200,
    description: 'Categories retrieved successfully',
    type: [String],
  })
  async getCategories(@Request() req): Promise<string[]> {
    return this.productsService.getCategories(req.user.companyId);
  }

  @Get('subcategories')
  @ApiOperation({ summary: 'Get product subcategories' })
  @ApiResponse({
    status: 200,
    description: 'Subcategories retrieved successfully',
    type: [String],
  })
  async getSubCategories(
    @Request() req,
    @Query('category') category?: string
  ): Promise<string[]> {
    return this.productsService.getSubCategories(category, req.user.companyId);
  }

  @Get('items/count')
  @ApiOperation({ summary: 'Get total product count' })
  @ApiResponse({
    status: 200,
    description: 'Total count retrieved successfully',
    type: Number,
  })
  async getTotalCount(@Request() req): Promise<number> {
    return this.productsService.getTotalCount(req.user.companyId);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get product statistics' })
  @ApiResponse({
    status: 200,
    description: 'Product statistics retrieved successfully',
    type: ProductStatsDto,
  })
  async getProductStats(@Request() req): Promise<ProductStatsDto> {
    return this.productsService.getProductStats(req.user.companyId);
  }



  @Post('items')
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product created successfully', type: ProductDto })
  @ApiResponse({ status: 409, description: 'Product with item code already exists' })
  async createProduct(@Body() productData: CreateProductDto, @Request() req): Promise<ProductDto> {
    // Attach companyId from JWT
    const data = { ...productData, companyId: req.user.companyId };
    return this.productsService.createProduct(data);
  }

  @Post('items/bulk')
  @ApiOperation({ summary: 'Create multiple products in bulk' })
  @ApiResponse({ status: 201, description: 'Products created successfully', type: [ProductDto] })
  @ApiResponse({ status: 409, description: 'Some products with item codes already exist' })
  async bulkCreateProducts(@Body() bulkData: BulkCreateProductDto, @Request() req): Promise<ProductDto[]> {
    // Attach companyId from JWT
    const data = { ...bulkData, companyId: req.user.companyId };
    return this.productsService.bulkCreateProducts(data);
  }

  @Put('items/:itemCode')
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({ status: 200, description: 'Product updated successfully', type: ProductDto })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async updateProduct(
    @Param('itemCode') itemCode: string,
    @Body() productData: UpdateProductDto,
    @Request() req
  ): Promise<ProductDto> {
    const data = { ...productData, companyId: req.user.companyId };
    return this.productsService.updateProduct(itemCode, data);
  }

  @Put('items/:itemCode/image')
  @ApiOperation({ summary: 'Update product image' })
  @ApiResponse({ status: 200, description: 'Product image updated successfully', type: ProductDto })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async updateProductImage(
    @Param('itemCode') itemCode: string,
    @Body('imageUrl') imageUrl: string,
    @Request() req
  ): Promise<ProductDto> {
    return this.productsService.updateProductImage(itemCode, imageUrl, req.user.companyId);
  }

  @Put('items/:itemCode/stock')
  @ApiOperation({ summary: 'Update product stock quantity' })
  @ApiResponse({ status: 200, description: 'Product stock updated successfully', type: ProductDto })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiResponse({ status: 400, description: 'Invalid quantity' })
  async updateProductStock(
    @Param('itemCode') itemCode: string,
    @Body('qty') qty: number,
    @Request() req
  ): Promise<ProductDto> {
    return this.productsService.updateProductStock(itemCode, qty, req.user.companyId);
  }

  @Delete('items/:itemCode')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({ status: 200, description: 'Product deleted successfully' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async deleteProduct(
    @Param('itemCode') itemCode: string,
    @Request() req
  ): Promise<{ success: boolean }> {
    await this.productsService.deleteProduct(itemCode, req.user.companyId);
    return { success: true };
  }
} 