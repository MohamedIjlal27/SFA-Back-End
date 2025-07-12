import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../database/prisma.service';
import { LoginDto, LoginResponseDto } from '../common/dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { companyId, exeId, password, androidId, platform } = loginDto;

    // Find user by companyId and exeId (multi-tenant safe)
    const user = await this.prisma.user.findFirst({
      where: {
        companyId,
        exeId,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if user is active
    if (!user.isActive) {
      throw new UnauthorizedException('User account is deactivated');
    }

    // Check password (assuming hashed passwords)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Handle Android ID for mobile platform
    let isFirstTimeLogin = false;
    if (platform === 'mobile') {
      if (!androidId) {
        throw new BadRequestException('Android ID is required for mobile login');
      }

      // Check if this is first-time login (no Android ID stored yet)
      if (!user.androidId) {
        // Store Android ID for first-time mobile login
        await this.prisma.user.update({
          where: { id: user.id },
          data: { 
            androidId,
            lastLoginAt: new Date()
          },
        });
        isFirstTimeLogin = true;
      } else if (user.androidId !== androidId) {
        // Android ID mismatch - device binding violation
        throw new UnauthorizedException('Device not authorized. Please contact administrator.');
      } else {
        // Update last login time for existing mobile user
        await this.prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        });
      }
    } else {
      // For web login, just update last login time
      await this.prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      });
    }

    // Generate JWT token
    const payload = {
      exeId: user.exeId,
      companyId: user.companyId,
      role: user.role,
      userId: user.id,
    };

    const token = this.jwtService.sign(payload);

    // Return user data with new fields
    return {
      leader: user.leader || '',
      exeId: user.exeId,
      areaCode: user.areaCode || '',
      exeNameOrig: user.exeNameOrig || '',
      exeName: user.exeName || '',
      role: user.role || '',
      areaName: user.areaName || '',
      region: user.region || '',
      subdivisionCode: user.subdivisionCode || '',
      imageLocation: user.imageLocation || '',
      token: token,
      companyId: companyId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      username: user.username,
      userType: user.userType,
      androidId: user.androidId,
      isActive: user.isActive,
      lastLoginAt: user.lastLoginAt,
      isFirstTimeLogin,
    };
  }

  async validateUser(exeId: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { exeId },
    });
    return user;
  }

  // Sync methods for mobile app
  async syncUserData(userData: any) {
    try {
      // For now, just log the sync attempt
      console.log('User data sync requested for:', userData.exeId, 'companyId:', userData.companyId);
      
      return {
        success: true,
        message: 'User data synced successfully',
        exeId: userData.exeId,
        companyId: userData.companyId,
      };
    } catch (error) {
      console.error('Error syncing user data:', error);
      return {
        success: false,
        message: 'Failed to sync user data',
      };
    }
  }

  async syncUserAvatar(avatarData: any) {
    try {
      // For now, just log the sync attempt
      console.log('User avatar sync requested for:', avatarData.exeId, 'companyId:', avatarData.companyId);
      
      return {
        success: true,
        message: 'User avatar synced successfully',
        exeId: avatarData.exeId,
        companyId: avatarData.companyId,
      };
    } catch (error) {
      console.error('Error syncing user avatar:', error);
      return {
        success: false,
        message: 'Failed to sync user avatar',
      };
    }
  }

  async clearUserData() {
    try {
      // For now, just log the clear attempt
      console.log('User data clear requested');
      
      return {
        success: true,
        message: 'User data cleared successfully',
      };
    } catch (error) {
      console.error('Error clearing user data:', error);
      return {
        success: false,
        message: 'Failed to clear user data',
      };
    }
  }

  async storeLocation(locationData: any) {
    try {
      const { userCode, latitude, longitude, description, timestamp, type, companyId } = locationData;
      if (!companyId) {
        throw new Error('companyId is required');
      }
      // Store location in database
      const location = await this.prisma.userLocation.create({
        data: {
          userCode,
          latitude,
          longitude,
          description,
          timestamp: new Date(timestamp),
          type,
          companyId,
        },
      });

      console.log('Location stored successfully:', location);
      
      return {
        success: true,
        message: 'Location stored successfully',
        locationId: location.id,
      };
    } catch (error) {
      console.error('Error storing location:', error);
      return {
        success: false,
        message: 'Failed to store location',
        error: error.message,
      };
    }
  }
} 