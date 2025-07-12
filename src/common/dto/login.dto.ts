import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
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

  @ApiProperty({ example: 'password123', description: 'Password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ 
    example: 'android_123456789', 
    description: 'Android ID (required for mobile app first-time login)',
    required: false 
  })
  @IsString()
  @IsOptional()
  androidId?: string;

  @ApiProperty({ 
    example: 'mobile', 
    description: 'Login platform (mobile, web)',
    required: false 
  })
  @IsString()
  @IsOptional()
  platform?: string;
}

export class LoginResponseDto {
  @ApiProperty()
  leader: string;

  @ApiProperty()
  exeId: string;

  @ApiProperty()
  companyId: string;

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

  @ApiProperty({ required: false })
  firstName?: string;

  @ApiProperty({ required: false })
  lastName?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty({ required: false })
  username?: string;

  @ApiProperty()
  userType: string;

  @ApiProperty({ required: false })
  androidId?: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty({ required: false })
  lastLoginAt?: Date;

  @ApiProperty()
  isFirstTimeLogin?: boolean;
} 