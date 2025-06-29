import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  itemCode: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  subCategory: string;

  @ApiProperty()
  categoryCode: string;

  @ApiProperty()
  uom: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  qty: number;

  @ApiProperty({ required: false })
  imageUrl?: string;

  @ApiProperty()
  discountAmount: number;

  @ApiProperty()
  discountPercentage: number;

  @ApiProperty({ default: false })
  isSaved?: boolean;

  @ApiProperty({ default: false })
  isSold?: boolean;

  @ApiProperty({ default: false })
  isNewShipment?: boolean;
}

export class PaginationDto {
  @ApiProperty({ description: 'Page number (1-based)', default: 1 })
  page: number = 1;

  @ApiProperty({ description: 'Number of items per page', default: 20 })
  limit: number = 20;

  @ApiProperty({ description: 'Search query', required: false })
  search?: string;

  @ApiProperty({ description: 'Category filter', required: false })
  category?: string;

  @ApiProperty({ description: 'Subcategory filter', required: false })
  subcategory?: string;

  @ApiProperty({ description: 'Sort field', required: false, default: 'itemCode' })
  sortBy?: string = 'itemCode';

  @ApiProperty({ description: 'Sort order', required: false, enum: ['asc', 'desc'], default: 'asc' })
  sortOrder?: 'asc' | 'desc' = 'asc';
}

export class PaginatedProductsResponseDto {
  @ApiProperty({ type: [ProductDto] })
  products: ProductDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  hasNext: boolean;

  @ApiProperty()
  hasPrev: boolean;
} 