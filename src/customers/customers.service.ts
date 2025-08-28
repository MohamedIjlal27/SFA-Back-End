import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  CustomerDto,
  CustomerDetailsResponseDto,
  DueListResponseDto,
  DocumentDto,
  DocumentResponseDto,
  UploadDocumentDto,
} from '../common/dto/customer.dto';
import { join } from 'path';
import { unlink } from 'fs/promises';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async getCustomerList(exeId: string, companyId: string): Promise<CustomerDto[]> {
    const customers = await this.prisma.customer.findMany({
      where: {
        exeId,
        companyId,
        isActive: true,
      },
      select: {
        customerId: true,
        exeId: true,
        customerName: true,
        addr1: true,
        addr2: true,
        addr3: true,
        city: true,
        route: true,
        phone1: true,
        phone2: true,
        phone3: true,
        additional: true,
        isActive: true,
        grade: true,
        companyId: true,
      },
    });

    return customers.map(customer => ({
      customerId: customer.customerId,
      exeId: customer.exeId,
      customerName: customer.customerName,
      addr1: customer.addr1 || '',
      addr2: customer.addr2 || '',
      addr3: customer.addr3 || '',
      city: customer.city || '',
      route: customer.route || '',
      phone1: customer.phone1 || '',
      phone2: customer.phone2 || '',
      phone3: customer.phone3 || '',
      additional: customer.additional || '',
      isActive: customer.isActive ? 1 : 0,
      grade: customer.grade || '',
      companyId: customer.companyId,
    }));
  }

  async getCustomerDetails(customerId: string, companyId: string): Promise<CustomerDetailsResponseDto> {
    const customer = await this.prisma.customer.findFirst({
      where: { customerId, companyId },
      include: {
        invoices: {
          where: {
            dueAmount: { not: 0 },
          },
          orderBy: { docDate: 'desc' },
        },
        payments: {
          orderBy: { transDate: 'desc' },
        },
      },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    // Calculate balance due
    const totalBalanceDue = customer.invoices.reduce(
      (sum, invoice) => sum + Number(invoice.dueAmount),
      0,
    );

    // Calculate ageing buckets
    const now = new Date();
    const ageing = {
      '0-30': 0,
      '31-60': 0,
      '61-90': 0,
      '91-120': 0,
      '>120': 0,
    };

    customer.invoices.forEach(invoice => {
      if (invoice.daysDue !== null) {
        const daysDue = invoice.daysDue;
        const amount = Number(invoice.dueAmount);

        if (daysDue <= 30) ageing['0-30'] += amount;
        else if (daysDue <= 60) ageing['31-60'] += amount;
        else if (daysDue <= 90) ageing['61-90'] += amount;
        else if (daysDue <= 120) ageing['91-120'] += amount;
        else ageing['>120'] += amount;
      }
    });

    return {
      result: {
        customerId: customer.customerId,
        companyId: customer.companyId,
        executiveId: customer.exeId,
        customerName: customer.customerName,
        telephone1: customer.phone1 || '',
        telephone2: customer.phone2 || '',
        contactName: customer.contactName || '',
        contactPhone: customer.contactPhone || '',
        startDate: customer.startDate?.toISOString().split('T')[0] || '',
        creditLimit: Number(customer.creditLimit) || 0,
        creditPeriod: customer.creditPeriod || 0,
        comments: customer.comments || '',
        lastInvoiceDate: customer.lastInvoiceDate?.toISOString().split('T')[0] || '',
        lastInvoiceAmt: Number(customer.lastInvoiceAmt) || 0,
        lastPaymentDate: customer.lastPaymentDate?.toISOString().split('T')[0] || '',
        lastPaymentAmt: Number(customer.lastPaymentAmt) || 0,
        isInactive: customer.isInactive,
        isHold: customer.isHold,
        followupStatus: customer.followupStatus,
        address1: customer.addr1 || '',
        address2: customer.addr2 || '',
        address3: customer.addr3 || '',
        city: customer.city || '',
        location: customer.location || '',
      },
      balanceDue: totalBalanceDue,
      ageing,
      overdueInvoices: customer.invoices.map(invoice => ({
        documentNo: invoice.documentNo,
        docDate: invoice.docDate.toISOString().split('T')[0],
        docAmount: Number(invoice.docAmount),
        daysDue: invoice.daysDue,
        docType: invoice.docType,
        dueAmount: Number(invoice.dueAmount),
        exeId: invoice.exeId || '',
        'Ref No': invoice.refNo || '',
      })),
    };
  }

  async getDueList(exeId: string, companyId: string): Promise<DueListResponseDto> {
    const customers = await this.prisma.customer.findMany({
      where: {
        exeId,
        companyId,
        isActive: true,
      },
      include: {
        invoices: {
          where: {
            dueAmount: { not: 0 },
          },
          orderBy: { docDate: 'desc' },
        },
      },
    });

    const duelist = customers
      .filter(customer => customer.invoices.length > 0)
      .map(customer => {
        const overdue = customer.invoices.reduce(
          (sum, invoice) => sum + Number(invoice.dueAmount),
          0,
        );

        return {
          customerId: customer.customerId,
          companyId: customer.companyId,
          customerName: customer.customerName,
          overdue,
          invoices: customer.invoices.map(invoice => ({
            documentNo: invoice.documentNo,
            docDate: invoice.docDate.toISOString().split('T')[0],
            docAmount: Number(invoice.docAmount),
            daysDue: invoice.daysDue || 0,
            docType: invoice.docType,
            dueAmount: Number(invoice.dueAmount),
            RefNo: invoice.refNo || '',
          })),
        };
      })
      .filter(customer => customer.overdue > 0);

    return { duelist };
  }

  async getCustomerDocuments(customerId: string, companyId: string): Promise<DocumentResponseDto> {
    // Verify customer exists
    const customer = await this.prisma.customer.findFirst({
      where: { customerId, companyId },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    const documents = await this.prisma.document.findMany({
      where: { customerId, companyId },
      orderBy: { createdAt: 'desc' },
    });

    return {
      documents: documents.map(doc => ({
        id: doc.id,
        customerId: doc.customerId,
        uploadedBy: doc.uploadedBy,
        fileName: doc.fileName,
        originalName: doc.originalName,
        fileType: doc.fileType,
        fileSize: doc.fileSize,
        fileUrl: doc.fileUrl,
        description: doc.description,
        createdAt: doc.createdAt.toISOString(),
        updatedAt: doc.updatedAt.toISOString(),
      })),
    };
  }

  async uploadDocument(file: any, uploadDocumentDto: UploadDocumentDto, user: any): Promise<DocumentDto> {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }

    const { customerId, description } = uploadDocumentDto;

    // Verify customer exists
    const customer = await this.prisma.customer.findFirst({
      where: { customerId, companyId: user.companyId },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    try {
      let fileUrl: string;
      let fileName: string;

      if (process.env.VERCEL === '1') {
        // For production (Vercel), we'll use a placeholder URL since we can't store files locally
        // In a real production environment, you'd want to use a cloud storage service like AWS S3, Cloudinary, etc.
        fileName = `${Date.now()}_${file.originalname}`;
        fileUrl = `https://placeholder.com/documents/${fileName}`; // Placeholder URL
      } else {
        // For development, use local storage
        const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
        fileName = file.filename;
        fileUrl = `${baseUrl}/uploads/documents/${fileName}`;
      }

      // Save document record to database
      const document = await this.prisma.document.create({
        data: {
          companyId: user.companyId,
          customerId,
          uploadedBy: user.exeId,
          fileName: fileName,
          originalName: file.originalname,
          fileType: file.mimetype,
          fileSize: file.size,
          fileUrl: fileUrl,
          description,
        },
      });

      return {
        id: document.id,
        customerId: document.customerId,
        uploadedBy: document.uploadedBy,
        fileName: document.fileName,
        originalName: document.originalName,
        fileType: document.fileType,
        fileSize: document.fileSize,
        fileUrl: document.fileUrl,
        description: document.description,
        createdAt: document.createdAt.toISOString(),
        updatedAt: document.updatedAt.toISOString(),
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to upload document', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteDocument(documentId: string, companyId: string): Promise<{ message: string }> {
    const document = await this.prisma.document.findFirst({
      where: { id: documentId, companyId },
    });

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    if (process.env.VERCEL !== '1') {
      // Delete the physical file only in development
      const filePath = join(__dirname, '..', '..', 'uploads', 'documents', document.fileName);
      try {
        await unlink(filePath);
      } catch (error) {
        // File might not exist, continue with database deletion
        console.warn(`File not found for deletion: ${filePath}`);
      }
    }

    // Delete from database
    await this.prisma.document.delete({
      where: { id: documentId },
    });

    return { message: 'Document deleted successfully' };
  }

  async downloadDocument(documentId: string, companyId: string, res: any): Promise<void> {
    const document = await this.prisma.document.findFirst({
      where: { id: documentId, companyId },
    });

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    if (process.env.VERCEL === '1') {
      // For production, redirect to the stored URL
      res.redirect(document.fileUrl);
    } else {
      // For development, serve local file
      const filePath = join(__dirname, '..', '..', 'uploads', 'documents', document.fileName);
      
      res.download(filePath, document.originalName, (err) => {
        if (err) {
          throw new HttpException('File not found', HttpStatus.NOT_FOUND);
        }
      });
    }
  }
} 