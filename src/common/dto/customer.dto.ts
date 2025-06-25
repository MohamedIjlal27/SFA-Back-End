import { ApiProperty } from '@nestjs/swagger';

export class CustomerDto {
  @ApiProperty()
  customerId: string;

  @ApiProperty()
  exeId: string;

  @ApiProperty()
  customerName: string;

  @ApiProperty()
  addr1: string;

  @ApiProperty()
  addr2: string;

  @ApiProperty()
  addr3: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  route: string;

  @ApiProperty()
  phone1: string;

  @ApiProperty()
  phone2: string;

  @ApiProperty()
  phone3: string;

  @ApiProperty()
  additional: string;

  @ApiProperty()
  isActive: number;

  @ApiProperty()
  grade: string;
}

export class CustomerDetailDto {
  @ApiProperty()
  customerId: string;

  @ApiProperty()
  executiveId: string;

  @ApiProperty()
  customerName: string;

  @ApiProperty()
  telephone1: string;

  @ApiProperty()
  telephone2: string;

  @ApiProperty()
  contactName: string;

  @ApiProperty()
  contactPhone: string;

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  creditLimit: number;

  @ApiProperty()
  creditPeriod: number;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  lastInvoiceDate: string;

  @ApiProperty()
  lastInvoiceAmt: number;

  @ApiProperty()
  lastPaymentDate: string;

  @ApiProperty()
  lastPaymentAmt: number;

  @ApiProperty()
  isInactive: boolean;

  @ApiProperty()
  isHold: boolean;

  @ApiProperty()
  followupStatus: string | null;

  @ApiProperty()
  address1: string;

  @ApiProperty()
  address2: string;

  @ApiProperty()
  address3: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  location: string;
}

export class InvoiceDto {
  @ApiProperty()
  documentNo: string;

  @ApiProperty()
  docDate: string;

  @ApiProperty()
  docAmount: number;

  @ApiProperty()
  daysDue: number | null;

  @ApiProperty()
  docType: string;

  @ApiProperty()
  dueAmount: number;

  @ApiProperty()
  exeId: string;

  @ApiProperty()
  'Ref No': string;
}

export class CustomerDetailsResponseDto {
  @ApiProperty()
  result: CustomerDetailDto;

  @ApiProperty()
  balanceDue: number;

  @ApiProperty()
  ageing: {
    '0-30': number;
    '31-60': number;
    '61-90': number;
    '91-120': number;
    '>120': number;
  };

  @ApiProperty({ type: [InvoiceDto] })
  overdueInvoices: InvoiceDto[];
}

export class DueListInvoiceDto {
  @ApiProperty()
  documentNo: string;

  @ApiProperty()
  docDate: string;

  @ApiProperty()
  docAmount: number;

  @ApiProperty()
  daysDue: number;

  @ApiProperty()
  docType: string;

  @ApiProperty()
  dueAmount: number;

  @ApiProperty()
  RefNo: string;
}

export class DueListCustomerDto {
  @ApiProperty()
  customerId: string;

  @ApiProperty()
  customerName: string;

  @ApiProperty()
  overdue: number;

  @ApiProperty({ type: [DueListInvoiceDto] })
  invoices: DueListInvoiceDto[];
}

export class DueListResponseDto {
  @ApiProperty({ type: [DueListCustomerDto] })
  duelist: DueListCustomerDto[];
} 