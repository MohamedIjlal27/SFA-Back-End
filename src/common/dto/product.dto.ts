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

  @ApiProperty()
  imageUrl?: string;

  @ApiProperty()
  discountAmount: number;

  @ApiProperty()
  discountPercentage: number;

  @ApiProperty()
  isSaved?: boolean;

  @ApiProperty()
  isSold?: boolean;

  @ApiProperty()
  isNewShipment?: boolean;
} 