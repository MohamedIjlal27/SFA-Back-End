import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean, IsArray, Min, Max, IsUrl, IsNotEmpty } from 'class-validator';

export class ProductDto {
  @ApiProperty({ description: 'Unique product item code' })
  @IsString()
  @IsNotEmpty()
  itemCode: string;

  @ApiProperty({ description: 'Company ID for multi-tenancy' })
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @ApiProperty({ description: 'Product name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Product description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Product category' })
  @IsString()
  @IsOptional()
  category: string;

  @ApiProperty({ description: 'Product subcategory' })
  @IsString()
  @IsOptional()
  subCategory: string;

  @ApiProperty({ description: 'Category code' })
  @IsString()
  @IsOptional()
  categoryCode: string;

  @ApiProperty({ description: 'Unit of measurement' })
  @IsString()
  @IsOptional()
  uom: string;

  @ApiProperty({ description: 'Product price' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ description: 'Available quantity' })
  @IsNumber()
  @Min(0)
  qty: number;

  @ApiProperty({ description: 'Product image URL', required: false })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ description: 'Discount amount' })
  @IsNumber()
  @Min(0)
  discountAmount: number;

  @ApiProperty({ description: 'Discount percentage' })
  @IsNumber()
  @Min(0)
  @Max(100)
  discountPercentage: number;

  @ApiProperty({ description: 'Whether product is saved', default: false })
  @IsBoolean()
  @IsOptional()
  isSaved?: boolean;

  @ApiProperty({ description: 'Whether product is sold', default: false })
  @IsBoolean()
  @IsOptional()
  isSold?: boolean;

  @ApiProperty({ description: 'Whether product is new shipment', default: false })
  @IsBoolean()
  @IsOptional()
  isNewShipment?: boolean;

  @ApiProperty({ description: 'Product creation timestamp' })
  @IsOptional()
  createdAt?: Date;

  @ApiProperty({ description: 'Product last update timestamp' })
  @IsOptional()
  updatedAt?: Date;
}

export class CreateProductDto {
  @ApiProperty({ description: 'Unique product item code' })
  @IsString()
  @IsNotEmpty()
  itemCode: string;

  @ApiProperty({ description: 'Company ID for multi-tenancy (optional - will be overridden by authenticated user)', required: false })
  @IsString()
  @IsOptional()
  companyId?: string;

  @ApiProperty({ description: 'Product name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Product description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Product category' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ description: 'Product subcategory' })
  @IsString()
  @IsOptional()
  subCategory?: string;

  @ApiProperty({ description: 'Category code' })
  @IsString()
  @IsOptional()
  categoryCode?: string;

  @ApiProperty({ description: 'Unit of measurement' })
  @IsString()
  @IsOptional()
  uom?: string;

  @ApiProperty({ description: 'Product price' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ description: 'Available quantity' })
  @IsNumber()
  @Min(0)
  qty: number;

  @ApiProperty({ description: 'Product image URL', required: false })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ description: 'Discount amount', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  discountAmount?: number;

  @ApiProperty({ description: 'Discount percentage', default: 0 })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  discountPercentage?: number;

  @ApiProperty({ description: 'Whether product is active', default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateProductDto {
  @ApiProperty({ description: 'Product name' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Product description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Product category' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ description: 'Product subcategory' })
  @IsString()
  @IsOptional()
  subCategory?: string;

  @ApiProperty({ description: 'Category code' })
  @IsString()
  @IsOptional()
  categoryCode?: string;

  @ApiProperty({ description: 'Unit of measurement' })
  @IsString()
  @IsOptional()
  uom?: string;

  @ApiProperty({ description: 'Product price' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiProperty({ description: 'Available quantity' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  qty?: number;

  @ApiProperty({ description: 'Product image URL' })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ description: 'Discount amount' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  discountAmount?: number;

  @ApiProperty({ description: 'Discount percentage' })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  discountPercentage?: number;

  @ApiProperty({ description: 'Whether product is active' })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class BulkCreateProductDto {
  @ApiProperty({ description: 'Array of products to create', type: [CreateProductDto] })
  @IsArray()
  products: CreateProductDto[];
}

export class ProductSearchDto {
  @ApiProperty({ description: 'Search query' })
  @IsString()
  @IsNotEmpty()
  query: string;

  @ApiProperty({ description: 'Category filter', required: false })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ description: 'Subcategory filter', required: false })
  @IsString()
  @IsOptional()
  subcategory?: string;

  @ApiProperty({ description: 'Minimum price filter', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  minPrice?: number;

  @ApiProperty({ description: 'Maximum price filter', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  maxPrice?: number;

  @ApiProperty({ description: 'In stock only filter', required: false })
  @IsBoolean()
  @IsOptional()
  inStockOnly?: boolean;
}

export class PaginationDto {
  @ApiProperty({ description: 'Page number (1-based)', default: 1 })
  @IsNumber()
  @Min(1)
  page: number = 1;

  @ApiProperty({ description: 'Number of items per page', default: 20 })
  @IsNumber()
  @Min(1)
  @Max(100)
  limit: number = 20;

  @ApiProperty({ description: 'Search query', required: false })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty({ description: 'Category filter', required: false })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ description: 'Subcategory filter', required: false })
  @IsString()
  @IsOptional()
  subcategory?: string;

  @ApiProperty({ description: 'Sort field', required: false, default: 'itemCode' })
  @IsString()
  @IsOptional()
  sortBy?: string = 'itemCode';

  @ApiProperty({ description: 'Sort order', required: false, enum: ['asc', 'desc'], default: 'asc' })
  @IsString()
  @IsOptional()
  sortOrder?: 'asc' | 'desc' = 'asc';

  @ApiProperty({ description: 'Company ID for multi-tenancy', required: false })
  @IsString()
  @IsOptional()
  companyId?: string;
}

export class PaginatedProductsResponseDto {
  @ApiProperty({ type: [ProductDto] })
  products: ProductDto[];

  @ApiProperty({ description: 'Total number of products' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Total number of pages' })
  totalPages: number;

  @ApiProperty({ description: 'Whether there is a next page' })
  hasNext: boolean;

  @ApiProperty({ description: 'Whether there is a previous page' })
  hasPrev: boolean;
}

export class ProductStatsDto {
  @ApiProperty({ description: 'Total number of products' })
  totalProducts: number;

  @ApiProperty({ description: 'Number of active products' })
  activeProducts: number;

  @ApiProperty({ description: 'Number of products in stock' })
  inStockProducts: number;

  @ApiProperty({ description: 'Number of products out of stock' })
  outOfStockProducts: number;

  @ApiProperty({ description: 'Total inventory value' })
  totalInventoryValue: number;

  @ApiProperty({ description: 'Average product price' })
  averagePrice: number;

  @ApiProperty({ description: 'Number of categories' })
  totalCategories: number;

  @ApiProperty({ description: 'Products with images' })
  productsWithImages: number;
}

 