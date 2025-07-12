import { IsString, IsOptional, IsEmail, IsBoolean, IsEnum } from 'class-validator';

export enum UserType {
  MOBILE = 'mobile',
  WEB = 'web',
  BOTH = 'both',
}

export class CreateUserDto {
  @IsString()
  @IsOptional()
  exeId?: string;

  @IsString()
  companyId: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(UserType)
  @IsOptional()
  userType?: UserType;

  @IsString()
  @IsOptional()
  role?: string;

  @IsString()
  @IsOptional()
  leader?: string;

  @IsString()
  @IsOptional()
  areaCode?: string;

  @IsString()
  @IsOptional()
  exeName?: string;

  @IsString()
  @IsOptional()
  exeNameOrig?: string;

  @IsString()
  @IsOptional()
  areaName?: string;

  @IsString()
  @IsOptional()
  region?: string;

  @IsString()
  @IsOptional()
  subdivisionCode?: string;

  @IsString()
  @IsOptional()
  imageLocation?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(UserType)
  @IsOptional()
  userType?: UserType;

  @IsString()
  @IsOptional()
  androidId?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsString()
  @IsOptional()
  leader?: string;

  @IsString()
  @IsOptional()
  areaCode?: string;

  @IsString()
  @IsOptional()
  exeName?: string;

  @IsString()
  @IsOptional()
  exeNameOrig?: string;

  @IsString()
  @IsOptional()
  areaName?: string;

  @IsString()
  @IsOptional()
  region?: string;

  @IsString()
  @IsOptional()
  subdivisionCode?: string;

  @IsString()
  @IsOptional()
  imageLocation?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UserResponseDto {
  id: string;
  exeId: string;
  companyId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  username?: string;
  userType: string;
  androidId?: string;
  role?: string;
  leader?: string;
  areaCode?: string;
  exeName?: string;
  exeNameOrig?: string;
  areaName?: string;
  region?: string;
  subdivisionCode?: string;
  imageLocation?: string;
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  generatedPassword?: string; // Only included when creating new users
} 