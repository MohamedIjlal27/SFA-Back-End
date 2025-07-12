import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../common/dto/user.dto';
import { UserIdGenerator } from './user-id-generator.util';
import { PasswordGenerator } from './password-generator.util';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private userIdGenerator: UserIdGenerator,
    private passwordGenerator: PasswordGenerator,
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

    return response;
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