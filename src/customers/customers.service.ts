import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  CustomerDto,
  CustomerDetailsResponseDto,
  DueListResponseDto,
} from '../common/dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async getCustomerList(exeId: string): Promise<CustomerDto[]> {
    const customers = await this.prisma.customer.findMany({
      where: {
        exeId,
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
    }));
  }

  async getCustomerDetails(customerId: string): Promise<CustomerDetailsResponseDto> {
    const customer = await this.prisma.customer.findUnique({
      where: { customerId },
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

  async getDueList(exeId: string): Promise<DueListResponseDto> {
    const customers = await this.prisma.customer.findMany({
      where: {
        exeId,
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
} 