import { Controller, Get, Param, UseGuards, Request, Post, Body, UploadedFile, UseInterceptors, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import {
  CustomerDto,
  CustomerDetailsResponseDto,
  DueListResponseDto,
  DocumentDto,
  DocumentResponseDto,
  UploadDocumentDto,
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

  @Get('documents/:customerId')
  @ApiOperation({ summary: 'Get customer documents' })
  @ApiResponse({
    status: 200,
    description: 'Customer documents retrieved successfully',
    type: DocumentResponseDto,
  })
  async getCustomerDocuments(@Param('customerId') customerId: string, @Request() req): Promise<DocumentResponseDto> {
    return this.customersService.getCustomerDocuments(customerId, req.user.companyId);
  }

  @Post('documents/upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload customer document' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: 'Document uploaded successfully',
    type: DocumentDto,
  })
  async uploadDocument(
    @UploadedFile() file: any,
    @Body() uploadDocumentDto: UploadDocumentDto,
    @Request() req
  ): Promise<DocumentDto> {
    return this.customersService.uploadDocument(file, uploadDocumentDto, req.user);
  }

  @Delete('documents/:documentId')
  @ApiOperation({ summary: 'Delete customer document' })
  @ApiResponse({
    status: 200,
    description: 'Document deleted successfully',
  })
  async deleteDocument(@Param('documentId') documentId: string, @Request() req): Promise<{ message: string }> {
    return this.customersService.deleteDocument(documentId, req.user.companyId);
  }
} 