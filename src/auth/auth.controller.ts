import { Controller, Post, Body, HttpCode, HttpStatus, Delete, UseGuards, Request, Res } from '@nestjs/common';
import { Response } from 'express';
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
  @ApiOperation({ 
    summary: 'User login',
    description: 'Login with companyId, exeId, and password. For mobile login, Android ID is required.'
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid credentials or missing Android ID for mobile login',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid credentials or device not authorized',
  })
  async login(@Body() loginDto: LoginDto, @Res() res: Response): Promise<any> {
    const result = await this.authService.login(loginDto);
    
    // Set the isAuthenticated cookie (not httpOnly for demo, set httpOnly: true for production)
    res.cookie('isAuthenticated', 'true', { path: '/', httpOnly: false });
    
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('mobile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Mobile app login',
    description: 'Login specifically for mobile app with Android ID validation'
  })
  @ApiResponse({
    status: 200,
    description: 'Mobile login successful',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Missing Android ID',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid credentials or device not authorized',
  })
  async mobileLogin(@Body() loginDto: LoginDto, @Res() res: Response): Promise<any> {
    // Ensure platform is set to mobile
    loginDto.platform = 'mobile';
    
    if (!loginDto.androidId) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Android ID is required for mobile login',
        error: 'MISSING_ANDROID_ID'
      });
    }

    const result = await this.authService.login(loginDto);
    
    // Set the isAuthenticated cookie
    res.cookie('isAuthenticated', 'true', { path: '/', httpOnly: false });
    
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('web')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Web app login',
    description: 'Login specifically for web application'
  })
  @ApiResponse({
    status: 200,
    description: 'Web login successful',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid credentials',
  })
  async webLogin(@Body() loginDto: LoginDto, @Res() res: Response): Promise<any> {
    // Ensure platform is set to web
    loginDto.platform = 'web';
    
    const result = await this.authService.login(loginDto);
    
    // Set the isAuthenticated cookie
    res.cookie('isAuthenticated', 'true', { path: '/', httpOnly: false });
    
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User logout' })
  @ApiResponse({
    status: 200,
    description: 'Logout successful',
  })
  async logout(@Res() res: Response): Promise<any> {
    // Clear the isAuthenticated cookie
    res.cookie('isAuthenticated', '', { path: '/', expires: new Date(0) });
    return res.status(HttpStatus.OK).json({ message: 'Logout successful' });
  }

  @Post('location/store')
  @ApiOperation({ summary: 'Store user location data' })
  @ApiResponse({
    status: 201,
    description: 'Location data stored successfully',
  })
  async storeLocation(@Body() locationData: any) {
    // Require companyId in the body
    if (!locationData.companyId) {
      throw new Error('companyId is required');
    }
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
  async syncUserData(@Body() userData: any, @Request() req) {
    return this.authService.syncUserData({ ...userData, companyId: req.user.companyId });
  }

  @Post('avatar/sync')
  @ApiOperation({ summary: 'Sync user avatar from mobile app' })
  @ApiResponse({
    status: 201,
    description: 'User avatar synced successfully',
  })
  async syncUserAvatar(@Body() avatarData: any, @Request() req) {
    return this.authService.syncUserAvatar({ ...avatarData, companyId: req.user.companyId });
  }

  @Delete('sync')
  @ApiOperation({ summary: 'Clear synced user data' })
  @ApiResponse({
    status: 200,
    description: 'User data cleared successfully',
  })
  async clearUserData(@Request() req) {
    return this.authService.clearUserData();
  }
} 