/// <reference types="node" />
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create sample users/executives
  const users = await Promise.all([
    prisma.user.upsert({
      where: { exeId: 'EXE001' },
      update: {},
      create: {
        exeId: 'EXE001',
        companyId: 'LGLMKT',
        password: 'LGLMKT', // In production, this should be hashed
        leader: 'LEADER001',
        areaCode: 'CMB',
        exeName: 'John Doe',
        exeNameOrig: 'CMB:John Doe-001',
        role: 'Sales Executive',
        areaName: 'COLOMBO',
        region: 'Western',
        subdivisionCode: 'SUB001',
        imageLocation: '/images/executives/exe001.jpg',
        isActive: true,
      },
    }),
    prisma.user.upsert({
      where: { exeId: 'EXE002' },
      update: {},
      create: {
        exeId: 'EXE002',
        companyId: 'LGLMKT',
        password: 'LGLMKT',
        leader: 'LEADER001',
        areaCode: 'KAL',
        exeName: 'Jane Smith',
        exeNameOrig: 'KAL:Jane Smith-002',
        role: 'Area Sales Manager',
        areaName: 'KALUTARA',
        region: 'Western',
        subdivisionCode: 'SUB002',
        imageLocation: '/images/executives/exe002.jpg',
        isActive: true,
      },
    }),
  ]);

  console.log('✅ Users created:', users.length);

  // Create sample customers
  const customers = await Promise.all([
    prisma.customer.upsert({
      where: { customerId: 'CUST001' },
      update: {},
      create: {
        customerId: 'CUST001',
        exeId: 'EXE001',
        customerName: 'Colombo Hardware Store',
        addr1: '123 Main Street',
        addr2: 'Colombo 01',
        addr3: '',
        city: 'Colombo',
        route: 'Route A',
        phone1: '+94112345678',
        phone2: '+94112345679',
        phone3: '',
        additional: 'Additional info',
        isActive: true,
        grade: 'A',
        contactName: 'Mr. Hardware Owner',
        contactPhone: '+94112345680',
        startDate: new Date('2020-01-01'),
        creditLimit: 1000000.00,
        creditPeriod: 30,
        comments: 'Reliable customer',
        lastInvoiceDate: new Date('2024-01-15'),
        lastInvoiceAmt: 50000.00,
        lastPaymentDate: new Date('2024-01-10'),
        lastPaymentAmt: 45000.00,
        isInactive: false,
        isHold: false,
        followupStatus: 'Active',
        location: '6.9271,79.8612',
      },
    }),
    prisma.customer.upsert({
      where: { customerId: 'CUST002' },
      update: {},
      create: {
        customerId: 'CUST002',
        exeId: 'EXE001',
        customerName: 'Kalutara Construction Co',
        addr1: '456 Industrial Road',
        addr2: 'Kalutara',
        addr3: '',
        city: 'Kalutara',
        route: 'Route B',
        phone1: '+94112345681',
        phone2: '+94112345682',
        phone3: '',
        additional: 'Construction company',
        isActive: true,
        grade: 'B',
        contactName: 'Mr. Construction Manager',
        contactPhone: '+94112345683',
        startDate: new Date('2021-03-15'),
        creditLimit: 2000000.00,
        creditPeriod: 45,
        comments: 'Large construction projects',
        lastInvoiceDate: new Date('2024-01-20'),
        lastInvoiceAmt: 150000.00,
        lastPaymentDate: new Date('2024-01-18'),
        lastPaymentAmt: 120000.00,
        isInactive: false,
        isHold: false,
        followupStatus: 'Active',
        location: '6.5833,79.9593',
      },
    }),
  ]);

  console.log('✅ Customers created:', customers.length);

  // Create sample products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { itemCode: 'HW001' },
      update: {},
      create: {
        itemCode: 'HW001',
        description: 'Steel Nails 3 inch (DIS 10%)',
        category: 'Hardware',
        subCategory: 'Nails',
        categoryCode: 'HW',
        uom: 'KG',
        price: 500.00,
        qty: 100,
        imageUrl: 'https://example.com/images/hw001.jpg',
        discountAmount: 50.00,
        discountPercentage: 10.00,
        isActive: true,
      },
    }),
    prisma.product.upsert({
      where: { itemCode: 'HW002' },
      update: {},
      create: {
        itemCode: 'HW002',
        description: 'Cement Portland 50kg',
        category: 'Building Materials',
        subCategory: 'Cement',
        categoryCode: 'BM',
        uom: 'BAG',
        price: 1200.00,
        qty: 50,
        imageUrl: 'https://example.com/images/hw002.jpg',
        discountAmount: 0.00,
        discountPercentage: 0.00,
        isActive: true,
      },
    }),
    prisma.product.upsert({
      where: { itemCode: 'LT001' },
      update: {},
      create: {
        itemCode: 'LT001',
        description: 'LED Bulb 9W Warm White',
        category: 'Lighting',
        subCategory: 'LED Bulbs',
        categoryCode: 'LT',
        uom: 'PCS',
        price: 250.00,
        qty: 200,
        imageUrl: 'https://example.com/images/lt001.jpg',
        discountAmount: 25.00,
        discountPercentage: 10.00,
        isActive: true,
      },
    }),
    prisma.product.upsert({
      where: { itemCode: 'EL001' },
      update: {},
      create: {
        itemCode: 'EL001',
        description: 'Electrical Wire 2.5mm',
        category: 'Electrical',
        subCategory: 'Wires',
        categoryCode: 'EL',
        uom: 'MTR',
        price: 150.00,
        qty: 500,
        imageUrl: 'https://example.com/images/el001.jpg',
        discountAmount: 0.00,
        discountPercentage: 0.00,
        isActive: true,
      },
    }),
  ]);

  console.log('✅ Products created:', products.length);

  // Create sample invoices
  const invoices = await Promise.all([
    prisma.invoice.upsert({
      where: { documentNo: 'INV001' },
      update: {},
      create: {
        customerId: 'CUST001',
        documentNo: 'INV001',
        docDate: new Date('2024-01-15'),
        docAmount: 50000.00,
        daysDue: 15,
        docType: 'IN',
        dueAmount: 50000.00,
        exeId: 'EXE001',
        refNo: 'REF001',
      },
    }),
    prisma.invoice.upsert({
      where: { documentNo: 'INV002' },
      update: {},
      create: {
        customerId: 'CUST002',
        documentNo: 'INV002',
        docDate: new Date('2024-01-20'),
        docAmount: 150000.00,
        daysDue: 10,
        docType: 'IN',
        dueAmount: 150000.00,
        exeId: 'EXE001',
        refNo: 'REF002',
      },
    }),
  ]);

  console.log('✅ Invoices created:', invoices.length);

  // Create sample sales reports
  const salesReports = await Promise.all([
    // Sales data for current month (June 2025)
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-15'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW001',
        productName: 'Steel Nails 3 inch',
        category: 'Hardware',
        subCategory: 'Nails',
        quantity: 100,
        unitPrice: 500.00,
        totalSales: 50000.00,
        discount: 5000.00,
        netSales: 45000.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-20'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'HW002',
        productName: 'Cement Portland 50kg',
        category: 'Building Materials',
        subCategory: 'Cement',
        quantity: 200,
        unitPrice: 1200.00,
        totalSales: 240000.00,
        discount: 0.00,
        netSales: 240000.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-25'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'LT001',
        productName: 'LED Bulb 9W Warm White',
        category: 'Lighting',
        subCategory: 'LED Bulbs',
        quantity: 500,
        unitPrice: 250.00,
        totalSales: 125000.00,
        discount: 12500.00,
        netSales: 112500.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-28'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'EL001',
        productName: 'Electrical Wire 2.5mm',
        category: 'Electrical',
        subCategory: 'Wires',
        quantity: 1000,
        unitPrice: 150.00,
        totalSales: 150000.00,
        discount: 0.00,
        netSales: 150000.00,
      },
    }),
    // Additional sales for better metrics
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-10'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW001',
        productName: 'Steel Nails 3 inch',
        category: 'Hardware',
        subCategory: 'Nails',
        quantity: 50,
        unitPrice: 500.00,
        totalSales: 25000.00,
        discount: 2500.00,
        netSales: 22500.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-12'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'HW002',
        productName: 'Cement Portland 50kg',
        category: 'Building Materials',
        subCategory: 'Cement',
        quantity: 150,
        unitPrice: 1200.00,
        totalSales: 180000.00,
        discount: 0.00,
        netSales: 180000.00,
      },
    }),
  ]);

  console.log('✅ Sales reports created:', salesReports.length);

  // Create sample collections data
  const collections = await Promise.all([
    prisma.payment.upsert({
      where: { transNo: 'PAY001' },
      update: {},
      create: {
        customerId: 'CUST001',
        transNo: 'PAY001',
        transDate: new Date('2025-06-10'),
        amtBc: 45000.00,
        remUnappl: 5000.00,
      },
    }),
    prisma.payment.upsert({
      where: { transNo: 'PAY002' },
      update: {},
      create: {
        customerId: 'CUST002',
        transNo: 'PAY002',
        transDate: new Date('2025-06-18'),
        amtBc: 120000.00,
        remUnappl: 30000.00,
      },
    }),
    // Additional collections for current month
    prisma.payment.upsert({
      where: { transNo: 'PAY003' },
      update: {},
      create: {
        customerId: 'CUST001',
        transNo: 'PAY003',
        transDate: new Date('2025-06-22'),
        amtBc: 67500.00,
        remUnappl: 0.00,
      },
    }),
    prisma.payment.upsert({
      where: { transNo: 'PAY004' },
      update: {},
      create: {
        customerId: 'CUST002',
        transNo: 'PAY004',
        transDate: new Date('2025-06-25'),
        amtBc: 180000.00,
        remUnappl: 0.00,
      },
    }),
    prisma.payment.upsert({
      where: { transNo: 'PAY005' },
      update: {},
      create: {
        customerId: 'CUST001',
        transNo: 'PAY005',
        transDate: new Date('2025-06-28'),
        amtBc: 112500.00,
        remUnappl: 0.00,
      },
    }),
    prisma.payment.upsert({
      where: { transNo: 'PAY006' },
      update: {},
      create: {
        customerId: 'CUST002',
        transNo: 'PAY006',
        transDate: new Date('2025-06-30'),
        amtBc: 150000.00,
        remUnappl: 0.00,
      },
    }),
  ]);

  console.log('✅ Collections created:', collections.length);

  // Create sample returns data
  const returns = await Promise.all([
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-18'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW001',
        productName: 'Steel Nails 3 inch (RETURN)',
        category: 'Hardware',
        subCategory: 'Nails',
        quantity: -10, // Negative quantity indicates return
        unitPrice: 500.00,
        totalSales: -5000.00,
        discount: -500.00,
        netSales: -4500.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-22'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'LT001',
        productName: 'LED Bulb 9W Warm White (RETURN)',
        category: 'Lighting',
        subCategory: 'LED Bulbs',
        quantity: -20, // Negative quantity indicates return
        unitPrice: 250.00,
        totalSales: -5000.00,
        discount: -500.00,
        netSales: -4500.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-25'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'EL001',
        productName: 'Electrical Wire 2.5mm (RETURN)',
        category: 'Electrical',
        subCategory: 'Wires',
        quantity: -50, // Negative quantity indicates return
        unitPrice: 150.00,
        totalSales: -7500.00,
        discount: 0.00,
        netSales: -7500.00,
      },
    }),
  ]);

  console.log('✅ Returns created:', returns.length);

  // Create sample replacements data (similar to returns but with different product)
  const replacements = await Promise.all([
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-20'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW002',
        productName: 'Cement Portland 50kg (REPLACEMENT)',
        category: 'Replacement',
        subCategory: 'Cement',
        quantity: 5, // Positive quantity for replacement
        unitPrice: 1200.00,
        totalSales: 6000.00,
        discount: 0.00,
        netSales: 6000.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-24'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'LT001',
        productName: 'LED Bulb 9W Warm White (REPLACEMENT)',
        category: 'Replacement',
        subCategory: 'LED Bulbs',
        quantity: 15, // Positive quantity for replacement
        unitPrice: 250.00,
        totalSales: 3750.00,
        discount: 375.00,
        netSales: 3375.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-06-27'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW001',
        productName: 'Steel Nails 3 inch (REPLACEMENT)',
        category: 'Replacement',
        subCategory: 'Nails',
        quantity: 8, // Positive quantity for replacement
        unitPrice: 500.00,
        totalSales: 4000.00,
        discount: 400.00,
        netSales: 3600.00,
      },
    }),
  ]);

  console.log('✅ Replacements created:', replacements.length);

  // Add May 2025 sales reports for previous month comparison
  const maySalesReports = await Promise.all([
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-15'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW001',
        productName: 'Steel Nails 3 inch',
        category: 'Hardware',
        subCategory: 'Nails',
        quantity: 80,
        unitPrice: 500.00,
        totalSales: 40000.00,
        discount: 4000.00,
        netSales: 36000.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-20'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'HW002',
        productName: 'Cement Portland 50kg',
        category: 'Building Materials',
        subCategory: 'Cement',
        quantity: 150,
        unitPrice: 1200.00,
        totalSales: 180000.00,
        discount: 0.00,
        netSales: 180000.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-25'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'LT001',
        productName: 'LED Bulb 9W Warm White',
        category: 'Lighting',
        subCategory: 'LED Bulbs',
        quantity: 300,
        unitPrice: 250.00,
        totalSales: 75000.00,
        discount: 7500.00,
        netSales: 67500.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-28'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'EL001',
        productName: 'Electrical Wire 2.5mm',
        category: 'Electrical',
        subCategory: 'Wires',
        quantity: 600,
        unitPrice: 150.00,
        totalSales: 90000.00,
        discount: 0.00,
        netSales: 90000.00,
      },
    }),
  ]);
  console.log('✅ May Sales reports created:', maySalesReports.length);

  // Add May 2025 collections
  const mayCollections = await Promise.all([
    prisma.payment.upsert({
      where: { transNo: 'PAYMAY001' },
      update: {},
      create: {
        customerId: 'CUST001',
        transNo: 'PAYMAY001',
        transDate: new Date('2025-05-10'),
        amtBc: 36000.00,
        remUnappl: 4000.00,
      },
    }),
    prisma.payment.upsert({
      where: { transNo: 'PAYMAY002' },
      update: {},
      create: {
        customerId: 'CUST002',
        transNo: 'PAYMAY002',
        transDate: new Date('2025-05-18'),
        amtBc: 180000.00,
        remUnappl: 0.00,
      },
    }),
    prisma.payment.upsert({
      where: { transNo: 'PAYMAY003' },
      update: {},
      create: {
        customerId: 'CUST001',
        transNo: 'PAYMAY003',
        transDate: new Date('2025-05-25'),
        amtBc: 67500.00,
        remUnappl: 0.00,
      },
    }),
  ]);
  console.log('✅ May Collections created:', mayCollections.length);

  // Add May 2025 returns
  const mayReturns = await Promise.all([
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-18'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW001',
        productName: 'Steel Nails 3 inch (RETURN)',
        category: 'Hardware',
        subCategory: 'Nails',
        quantity: -5,
        unitPrice: 500.00,
        totalSales: -2500.00,
        discount: -250.00,
        netSales: -2250.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-22'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'LT001',
        productName: 'LED Bulb 9W Warm White (RETURN)',
        category: 'Lighting',
        subCategory: 'LED Bulbs',
        quantity: -10,
        unitPrice: 250.00,
        totalSales: -2500.00,
        discount: -250.00,
        netSales: -2250.00,
      },
    }),
  ]);
  console.log('✅ May Returns created:', mayReturns.length);

  // Add May 2025 replacements
  const mayReplacements = await Promise.all([
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-20'),
        customerId: 'CUST001',
        customerName: 'Colombo Hardware Store',
        city: 'Colombo',
        province: 'Western',
        productId: 'HW002',
        productName: 'Cement Portland 50kg (REPLACEMENT)',
        category: 'Replacement',
        subCategory: 'Cement',
        quantity: 2,
        unitPrice: 1200.00,
        totalSales: 2400.00,
        discount: 0.00,
        netSales: 2400.00,
      },
    }),
    prisma.salesReport.create({
      data: {
        date: new Date('2025-05-24'),
        customerId: 'CUST002',
        customerName: 'Kalutara Construction Co',
        city: 'Kalutara',
        province: 'Western',
        productId: 'LT001',
        productName: 'LED Bulb 9W Warm White (REPLACEMENT)',
        category: 'Replacement',
        subCategory: 'LED Bulbs',
        quantity: 5,
        unitPrice: 250.00,
        totalSales: 1250.00,
        discount: 125.00,
        netSales: 1125.00,
      },
    }),
  ]);
  console.log('✅ May Replacements created:', mayReplacements.length);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 