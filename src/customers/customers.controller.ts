import { Controller, Get, Param, UseGuards, Request, Post, Body, UploadedFile, UploadedFiles, UseInterceptors, Delete, Res } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
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
import { diskStorage } from 'multer';
import { extname } from 'path';

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
  @UseInterceptors(
    FilesInterceptor('file', 10, {
      storage: process.env.VERCEL === '1' ? undefined : diskStorage({
        destination: './uploads/documents',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit per file
        files: 10, // Maximum 10 files
      },
      fileFilter: (req, file, cb) => {
        // Allow common document and image types
        const allowedMimeTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'text/plain',
        ];
        
        if (allowedMimeTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error('Invalid file type. Only documents and images are allowed.'), false);
        }
      },
    })
  )
  @ApiOperation({ 
    summary: 'Upload customer documents',
    description: 'Upload multiple documents (up to 10 files, 10MB each). Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, GIF, WEBP, TXT'
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File upload with customer information',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Files to upload (max 10 files)',
        },
        customerId: {
          type: 'string',
          description: 'Customer ID',
          example: 'CUST001',
        },
        description: {
          type: 'string',
          description: 'Optional description for the documents',
          example: 'Customer contract documents',
        },
      },
      required: ['file', 'customerId'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Documents uploaded successfully',
    type: [DocumentDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid file format or missing required fields',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Authentication required',
  })
  @ApiResponse({
    status: 413,
    description: 'File too large - Maximum file size is 10MB',
  })
  async uploadDocument(
    @UploadedFiles() files: any[],
    @Body() uploadDocumentDto: UploadDocumentDto,
    @Request() req
  ): Promise<DocumentDto[]> {
    return this.customersService.uploadDocuments(files, uploadDocumentDto, req.user);
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

  @Get('documents/:documentId/download')
  @ApiOperation({ summary: 'Download customer document' })
  @ApiResponse({
    status: 200,
    description: 'Document file',
  })
  async downloadDocument(@Param('documentId') documentId: string, @Request() req, @Res() res) {
    return this.customersService.downloadDocument(documentId, req.user.companyId, res);
  }
} 