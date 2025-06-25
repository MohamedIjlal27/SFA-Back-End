import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const { companyId, exeId, password } = loginDto;

    // Validate company ID and password (hardcoded for now as per .NET API)
    if (companyId !== 'LGLMKT' || password !== 'LGLMKT') {
      throw new UnauthorizedException('Invalid company ID or password');
    }

    // Find user in database
    const user = await this.prisma.user.findUnique({
      where: { exeId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Generate JWT token
    const payload = {
      exeId: user.exeId,
      companyId: user.companyId,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);

    // Return user data (similar to .NET API response)
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
      console.log('User data sync requested for:', userData.exeId);
      
      return {
        success: true,
        message: 'User data synced successfully',
        exeId: userData.exeId,
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
      console.log('User avatar sync requested for:', avatarData.exeId);
      
      return {
        success: true,
        message: 'User avatar synced successfully',
        exeId: avatarData.exeId,
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
      const { userCode, latitude, longitude, description, timestamp, type } = locationData;
      
      // Store location in database
      const location = await this.prisma.userLocation.create({
        data: {
          userCode,
          latitude,
          longitude,
          description,
          timestamp: new Date(timestamp),
          type,
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