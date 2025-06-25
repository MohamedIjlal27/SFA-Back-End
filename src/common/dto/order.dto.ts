import { IsString, IsNotEmpty, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class OrderItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  unitPrice: number;

  @ApiProperty()
  @IsOptional()
  discount?: number;
}

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  salespersonId: string;

  @ApiProperty({ type: [OrderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  jsonPayload?: string;
}

export class OrderResponseDto {
  @ApiProperty()
  orderId: string;

  @ApiProperty()
  orderNumber: string;

  @ApiProperty()
  status: string;
} 