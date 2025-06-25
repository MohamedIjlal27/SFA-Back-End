import { Controller, Post, Body, HttpCode, HttpStatus, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from '../common/dto/login.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('Authentication')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('basic')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid credentials',
  })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Post('location/store')
  @ApiOperation({ summary: 'Store user location data' })
  @ApiResponse({
    status: 201,
    description: 'Location data stored successfully',
  })
  async storeLocation(@Body() locationData: any) {
    return this.authService.storeLocation(locationData);
  }
}

@ApiTags('User Sync')
@Controller('user')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserSyncController {
  constructor(private readonly authService: AuthService) {}

  @Post('sync')
  @ApiOperation({ summary: 'Sync user data from mobile app' })
  @ApiResponse({
    status: 201,
    description: 'User data synced successfully',
  })
  async syncUserData(@Body() userData: any) {
    return this.authService.syncUserData(userData);
  }

  @Post('avatar/sync')
  @ApiOperation({ summary: 'Sync user avatar from mobile app' })
  @ApiResponse({
    status: 201,
    description: 'User avatar synced successfully',
  })
  async syncUserAvatar(@Body() avatarData: any) {
    return this.authService.syncUserAvatar(avatarData);
  }

  @Delete('sync')
  @ApiOperation({ summary: 'Clear synced user data' })
  @ApiResponse({
    status: 200,
    description: 'User data cleared successfully',
  })
  async clearUserData() {
    return this.authService.clearUserData();
  }
} 