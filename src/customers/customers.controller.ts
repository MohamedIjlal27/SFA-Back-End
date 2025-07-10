import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import {
  CustomerDto,
  CustomerDetailsResponseDto,
  DueListResponseDto,
} from '../common/dto/customer.dto';

@ApiTags('Customers')
@Controller('ar')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('list/:exeId')
  @ApiOperation({ summary: 'Get customer list by executive ID' })
  @ApiResponse({
    status: 200,
    description: 'Customer list retrieved successfully',
    type: [CustomerDto],
  })
  async getCustomerList(@Param('exeId') exeId: string, @Request() req): Promise<CustomerDto[]> {
    return this.customersService.getCustomerList(exeId, req.user.companyId);
  }

  @Get('info/:customerId')
  @ApiOperation({ summary: 'Get customer details' })
  @ApiResponse({
    status: 200,
    description: 'Customer details retrieved successfully',
    type: CustomerDetailsResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Customer not found',
  })
  async getCustomerDetails(@Param('customerId') customerId: string, @Request() req): Promise<CustomerDetailsResponseDto> {
    return this.customersService.getCustomerDetails(customerId, req.user.companyId);
  }

  @Get('due/list/:exeId')
  @ApiOperation({ summary: 'Get due list by executive ID' })
  @ApiResponse({
    status: 200,
    description: 'Due list retrieved successfully',
    type: DueListResponseDto,
  })
  async getDueList(@Param('exeId') exeId: string, @Request() req): Promise<DueListResponseDto> {
    return this.customersService.getDueList(exeId, req.user.companyId);
  }
} 