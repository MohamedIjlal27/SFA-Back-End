import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'LGLMKT', description: 'Company ID' })
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @ApiProperty({ example: 'EXE001', description: 'Executive ID' })
  @IsString()
  @IsNotEmpty()
  exeId: string;

  @ApiProperty({ example: 'LGLMKT', description: 'Password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LoginResponseDto {
  @ApiProperty()
  leader: string;

  @ApiProperty()
  exeId: string;

  @ApiProperty()
  areaCode: string;

  @ApiProperty()
  exeNameOrig: string;

  @ApiProperty()
  exeName: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  areaName: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  subdivisionCode: string;

  @ApiProperty()
  imageLocation: string;

  @ApiProperty()
  token: string;
} 