import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../common/dto/user.dto';
import { UserIdGenerator } from './user-id-generator.util';
import { PasswordGenerator } from './password-generator.util';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private userIdGenerator: UserIdGenerator,
    private passwordGenerator: PasswordGenerator,
    private emailService: EmailService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    // Generate exeId if not provided and role is supported
    let exeId = createUserDto.exeId;
    
    if (!exeId && createUserDto.role) {
      if (!this.userIdGenerator.isSupportedRole(createUserDto.role)) {
        throw new BadRequestException(`Role "${createUserDto.role}" is not supported for automatic ID generation. Supported roles: ${this.userIdGenerator.getSupportedRoles().join(', ')}`);
      }
      
      try {
        exeId = await this.userIdGenerator.generateUserId(createUserDto.role, createUserDto.companyId);
      } catch (error) {
        throw new BadRequestException(`Failed to generate user ID: ${error.message}`);
      }
    }

    // Generate password if not provided
    let generatedPassword: string | undefined;
    let passwordToHash: string | undefined;
    
    if (!createUserDto.password) {
      generatedPassword = this.passwordGenerator.generatePasswordByUserType(createUserDto.userType || 'mobile');
      passwordToHash = generatedPassword;
    } else {
      passwordToHash = createUserDto.password;
    }

    // Check if user with same exeId exists in the company
    const existingUser = await this.prisma.user.findFirst({
      where: {
        exeId: exeId,
        companyId: createUserDto.companyId,
      },
    });

    if (existingUser) {
      throw new ConflictException('User with this exeId already exists in this company');
    }

    // Check if email is unique (if provided)
    if (createUserDto.email) {
      const existingEmail = await this.prisma.user.findUnique({
        where: { email: createUserDto.email },
      });

      if (existingEmail) {
        throw new ConflictException('User with this email already exists');
      }
    }

    // Check if username is unique (if provided)
    if (createUserDto.username) {
      const existingUsername = await this.prisma.user.findUnique({
        where: { username: createUserDto.username },
      });

      if (existingUsername) {
        throw new ConflictException('User with this username already exists');
      }
    }

    // Hash password
    let hashedPassword: string | undefined;
    if (passwordToHash) {
      hashedPassword = await bcrypt.hash(passwordToHash, 10);
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        exeId: exeId,
        password: hashedPassword,
        userType: createUserDto.userType || 'mobile',
      },
    });

    // Return user with generated password if one was created
    const response = this.mapToResponseDto(user);
    if (generatedPassword) {
      response.generatedPassword = generatedPassword;
    }

    // Send welcome email if email is provided
    if (user.email && generatedPassword) {
      const subject = 'Welcome to Smartix! Your Account Has Been Created';
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9fb; padding: 32px; color: #222;">
          <div style="max-width: 480px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); padding: 32px 24px;">
            <h2 style="color: #2a4d9b; margin-top: 0;">Welcome to Smartix!</h2>
            <p>Hi${user.firstName ? ' ' + user.firstName : ''},</p>
            <p>Your account has been created. Here are your login credentials:</p>
            <div style="background: #f3f6fa; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
              <p style="margin: 0 0 8px 0;"><b>User ID:</b> <span style="color: #2a4d9b;">${user.exeId}</span></p>
              <p style="margin: 0 0 8px 0;"><b>Company ID:</b> <span style="color: #2a4d9b;">${user.companyId}</span></p>
              <p style="margin: 0;"><b>Password:</b> <span style="color: #2a4d9b; letter-spacing: 1px;">${generatedPassword}</span></p>
            </div>
            <p style="margin-bottom: 24px;">For your security, please change this password after logging in and do not share it with anyone.</p>
            <p style="font-size: 0.95em; color: #666;">If you have any questions or need help, please contact your administrator or support team.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 16px 0;" />
            <p style="font-size: 0.95em; color: #888;">Thank you,<br/>The Smartix Team</p>
          </div>
        </div>
      `;
      try {
        await this.emailService.sendEmail(user.email, subject, html);
      } catch (err) {
        // Log but do not block user creation
        console.error('Failed to send welcome email:', err);
      }
    }

    // SMS sending logic removed

    return response;
  }

  async findAll(companyId?: string, page: number = 1, limit: number = 10, search?: string): Promise<{ users: UserResponseDto[]; total: number; page: number; limit: number }> {
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (companyId) {
      where.companyId = companyId;
    }

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
        { exeId: { contains: search, mode: 'insensitive' } },
        { role: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      users: users.map(user => this.mapToResponseDto(user)),
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.mapToResponseDto(user);
  }

  async findByExeId(exeId: string, companyId: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findFirst({
      where: {
        exeId,
        companyId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.mapToResponseDto(user);
  }

  async findByEmail(email: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.mapToResponseDto(user);
  }

  async findByUsername(username: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.mapToResponseDto(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    // Check if user exists
    const existingUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    // Check if email is unique (if being updated)
    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      const existingEmail = await this.prisma.user.findUnique({
        where: { email: updateUserDto.email },
      });

      if (existingEmail) {
        throw new ConflictException('User with this email already exists');
      }
    }

    // Check if username is unique (if being updated)
    if (updateUserDto.username && updateUserDto.username !== existingUser.username) {
      const existingUsername = await this.prisma.user.findUnique({
        where: { username: updateUserDto.username },
      });

      if (existingUsername) {
        throw new ConflictException('User with this username already exists');
      }
    }

    // Hash password if being updated
    let hashedPassword: string | undefined;
    if (updateUserDto.password) {
      hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        password: hashedPassword,
      },
    });

    return this.mapToResponseDto(user);
  }

  async updateAndroidId(id: string, androidId: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { androidId },
    });

    return this.mapToResponseDto(user);
  }

  async updateLastLogin(id: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: { lastLoginAt: new Date() },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.user.delete({
      where: { id },
    });
  }

  async deactivate(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });

    return this.mapToResponseDto(user);
  }

  async activate(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { isActive: true },
    });

    return this.mapToResponseDto(user);
  }

  async resetPassword(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Generate new password based on user type
    const newPassword = this.passwordGenerator.generatePasswordByUserType(user.userType || 'mobile');
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });

    // Return user with generated password
    const response = this.mapToResponseDto(updatedUser);
    response.generatedPassword = newPassword;

    // Send password reset email if email is provided
    if (user.email) {
      const subject = 'Your Smartix Account Password Has Been Reset';
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9fb; padding: 32px; color: #222;">
          <div style="max-width: 480px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); padding: 32px 24px;">
            <h2 style="color: #2a4d9b; margin-top: 0;">Password Reset Successful</h2>
            <p>Hi${user.firstName ? ' ' + user.firstName : ''},</p>
            <p>Your password for your <b>Smartix</b> account has been reset. Please find your new login credentials below:</p>
            <div style="background: #f3f6fa; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
              <p style="margin: 0 0 8px 0;"><b>User ID:</b> <span style="color: #2a4d9b;">${user.exeId}</span></p>
              <p style="margin: 0 0 8px 0;"><b>Company ID:</b> <span style="color: #2a4d9b;">${user.companyId}</span></p>
              <p style="margin: 0;"><b>New Password:</b> <span style="color: #2a4d9b; letter-spacing: 1px;">${newPassword}</span></p>
            </div>
            <p style="margin-bottom: 24px;">For your security, please change this password after logging in and do not share it with anyone.</p>
            <p style="font-size: 0.95em; color: #666;">If you did not request this password reset, please contact your administrator or support team immediately.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 16px 0;" />
            <p style="font-size: 0.95em; color: #888;">Thank you,<br/>The Smartix Team</p>
          </div>
        </div>
      `;
      try {
        await this.emailService.sendEmail(user.email, subject, html);
      } catch (err) {
        // Log but do not block password reset
        console.error('Failed to send password reset email:', err);
      }
    }

    return response;
  }

  async getAnalytics(companyId?: string) {
    const where: any = { role: { not: 'Admin' } };
    if (companyId) where.companyId = companyId;

    const [total, active, inactive, recent] = await Promise.all([
      this.prisma.user.count({ where }),
      this.prisma.user.count({ where: { ...where, isActive: true } }),
      this.prisma.user.count({ where: { ...where, isActive: false } }),
      this.prisma.user.findMany({
        where,
        orderBy: { lastLoginAt: 'desc' },
        take: 5,
        select: {
          id: true,
          exeId: true,
          firstName: true,
          lastName: true,
          isActive: true,
          lastLoginAt: true,
          role: true,
        },
      }),
    ]);

    return {
      total,
      active,
      inactive,
      recent,
    };
  }

  private mapToResponseDto(user: any): UserResponseDto {
    return {
      id: user.id,
      exeId: user.exeId,
      companyId: user.companyId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      username: user.username,
      userType: user.userType,
      androidId: user.androidId,
      role: user.role,
      leader: user.leader,
      areaCode: user.areaCode,
      exeName: user.exeName,
      exeNameOrig: user.exeNameOrig,
      areaName: user.areaName,
      region: user.region,
      subdivisionCode: user.subdivisionCode,
      imageLocation: user.imageLocation,
      isActive: user.isActive,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
} 