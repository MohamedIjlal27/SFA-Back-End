import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../common/dto/user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(
    @Query('companyId') companyId?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    
    return this.usersService.findAll(companyId, pageNum, limitNum, search);
  }

  @Get('analytics')
  async getAnalytics(@Query('companyId') companyId?: string) {
    return this.usersService.getAnalytics(companyId);
  }

  @Get('analytics/comprehensive')
  async getComprehensiveAnalytics(@Query('companyId') companyId?: string) {
    return this.usersService.getComprehensiveAnalytics(companyId);
  }

  @Get('analytics/top-users')
  async getTopUsersWithSales(@Query('companyId') companyId?: string) {
    return this.usersService.getTopUsersWithSales(companyId);
  }

  @Get('exe/:exeId')
  async findByExeId(
    @Param('exeId') exeId: string,
    @Query('companyId') companyId: string,
  ): Promise<UserResponseDto> {
    return this.usersService.findByExeId(exeId, companyId);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<UserResponseDto> {
    return this.usersService.findByEmail(email);
  }

  @Get('username/:username')
  async findByUsername(@Param('username') username: string): Promise<UserResponseDto> {
    return this.usersService.findByUsername(username);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':id/android-id')
  async updateAndroidId(
    @Param('id') id: string,
    @Body('androidId') androidId: string,
  ): Promise<UserResponseDto> {
    return this.usersService.updateAndroidId(id, androidId);
  }

  @Patch(':id/last-login')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateLastLogin(@Param('id') id: string): Promise<void> {
    return this.usersService.updateLastLogin(id);
  }

  @Patch(':id/deactivate')
  async deactivate(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.deactivate(id);
  }

  @Patch(':id/activate')
  async activate(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.activate(id);
  }

  @Patch(':id/reset-password')
  async resetPassword(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.resetPassword(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
} 