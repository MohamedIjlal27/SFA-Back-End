/// <reference types="node" />
import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create a single company
  await prisma.company.upsert({
    where: { id: 'COMP001' },
    update: {},
    create: {
      id: 'COMP001',
      name: 'Smartix Solutions Ltd',
    },
  });

  console.log('✅ Company created');

  // Create users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const salesPassword = await bcrypt.hash('sales123', 10);

  // Admin user
  await prisma.user.upsert({
    where: { exeId: 'ADMIN001' },
      update: {},
      create: {
      exeId: 'ADMIN001',
      companyId: 'COMP001',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@smartix.com',
      phone: '+1234567890',
      username: 'admin',
      password: adminPassword,
      userType: 'both',
      role: 'Admin',
        isActive: true,
    },
  });

  // Sales user
  await prisma.user.upsert({
    where: { exeId: 'SALES001' },
    update: {},
    create: {
      exeId: 'SALES001',
      companyId: 'COMP001',
      firstName: 'John',
      lastName: 'Salesman',
      email: 'john.sales@smartix.com',
      phone: '+1234567891',
      username: 'john.sales',
      password: salesPassword,
      userType: 'mobile',
      role: 'Sales Executive',
      isActive: true,
    },
  });

  console.log('✅ Users created');

  // Create customers
  const customers = [
    {
      customerId: 'WP03520',
      exeId: 'SALES001',
      companyId: 'COMP001',
      customerName: 'WELCOME HARDWARE',
      addr1: 'NO-429, MAIN STREET, PANADURA',
      addr2: '',
      addr3: '',
      city: 'Panadura',
      route: 'Main Street',
      phone1: '0777880688',
      phone2: '',
      phone3: '',
      additional: 'Hardware store - regular customer',
      isActive: true,
      grade: 'B',
      contactName: 'M.N.M RIFKY',
      contactPhone: '0777880688',
      creditLimit: 0.00,
      creditPeriod: 30,
      startDate: new Date('2020-01-15'),
      nicNumber: '840462740V',
    },
    {
      customerId: 'SA02355',
      exeId: 'SALES001',
      companyId: 'COMP001',
      customerName: 'STAR GLASS HOUSE',
      addr1: '4,5-MUSLIM MOSQUE ROAD, ANURADHAPUA',
      addr2: '',
      addr3: '',
      city: 'Anuradhapura',
      route: 'Muslim Mosque Road',
      phone1: '0252-227422',
      phone2: '0715-945175',
      phone3: '',
      additional: 'Glass manufacturing and retail business',
      isActive: true,
      grade: 'A',
      contactName: 'SJH',
      contactPhone: '0252-227422',
      creditLimit: 200000.00,
      creditPeriod: 30,
      startDate: new Date('2019-06-15'),
      nicNumber: '198510900061',
    },
    {
      customerId: 'OK03747',
      exeId: 'SALES001',
      companyId: 'COMP001',
      customerName: 'ORIENT HARDWARE & ELECTRICALS',
      addr1: '36 C, MOSQUE STREET, KALUTARA SOUTH',
      addr2: '',
      addr3: '',
      city: 'Kalutara',
      route: 'Mosque Street',
      phone1: '072-6202103',
      phone2: '',
      phone3: '',
      additional: 'Hardware and electrical supplies business',
      isActive: true,
      grade: 'B',
      contactName: 'M.K.M HISHAM',
      contactPhone: '072-6202103',
      creditLimit: 0.00,
      creditPeriod: 30,
      startDate: new Date('2018-09-10'),
      nicNumber: '198510900061',
    },

  ];

  for (const customer of customers) {
    await prisma.customer.upsert({
      where: { customerId: customer.customerId },
      update: {},
      create: customer,
    });
  }

  console.log('✅ Customers created');

  // Create products
  const products = [
    {
      itemCode: 'PROD001',
      companyId: 'COMP001',
      description: 'Laptop Computer - Dell XPS 13',
      category: 'Electronics',
      subCategory: 'Computers',
      categoryCode: 'ELEC-COMP',
      uom: 'PCS',
      price: 1299.99,
      qty: 50,
      discountAmount: 0,
      discountPercentage: 0,
      isActive: true,
    },
    {
      itemCode: 'PROD002',
      companyId: 'COMP001',
      description: 'Wireless Mouse - Logitech MX Master',
      category: 'Electronics',
      subCategory: 'Accessories',
      categoryCode: 'ELEC-ACC',
      uom: 'PCS',
      price: 89.99,
      qty: 100,
      discountAmount: 0,
      discountPercentage: 0,
      isActive: true,
    },
    {
      itemCode: 'PROD003',
      companyId: 'COMP001',
      description: 'Office Chair - Ergonomic Design',
      category: 'Furniture',
      subCategory: 'Office',
      categoryCode: 'FURN-OFF',
      uom: 'PCS',
      price: 299.99,
      qty: 25,
      discountAmount: 0,
      discountPercentage: 0,
      isActive: true,
    },
    {
      itemCode: 'PROD004',
      companyId: 'COMP001',
      description: 'Printer - HP LaserJet Pro',
      category: 'Electronics',
      subCategory: 'Printers',
      categoryCode: 'ELEC-PRT',
      uom: 'PCS',
      price: 399.99,
      qty: 30,
      discountAmount: 0,
      discountPercentage: 0,
      isActive: true,
    },
    {
      itemCode: 'PROD005',
      companyId: 'COMP001',
      description: 'Desk Lamp - LED Adjustable',
      category: 'Furniture',
      subCategory: 'Lighting',
      categoryCode: 'FURN-LIT',
      uom: 'PCS',
      price: 49.99,
      qty: 75,
      discountAmount: 0,
      discountPercentage: 0,
      isActive: true,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { 
        itemCode_companyId: {
          itemCode: product.itemCode,
          companyId: product.companyId,
        }
      },
      update: {},
      create: product,
    });
  }

  console.log('✅ Products created');

  // Create orders
  const orders = [
    {
      orderNumber: 'ORD001',
      customerId: 'WP03520',
      salespersonId: 'SALES001',
      companyId: 'COMP001',
      status: 'Completed',
      isDraft: false,
      jsonPayload: JSON.stringify({
        customerName: 'WELCOME HARDWARE',
        items: [
          { productId: 'PROD001', quantity: 2, unitPrice: 1299.99, discount: 0 },
          { productId: 'PROD002', quantity: 5, unitPrice: 89.99, discount: 0 },
        ]
      }),
    },
    {
      orderNumber: 'ORD002',
      customerId: 'SA02355',
      salespersonId: 'SALES001',
      companyId: 'COMP001',
      status: 'Pending',
      isDraft: false,
      jsonPayload: JSON.stringify({
        customerName: 'STAR GLASS HOUSE',
        items: [
          { productId: 'PROD003', quantity: 3, unitPrice: 299.99, discount: 0 },
          { productId: 'PROD005', quantity: 10, unitPrice: 49.99, discount: 0 },
        ]
      }),
    },
  ];

  for (const order of orders) {
    await prisma.order.upsert({
      where: { orderNumber: order.orderNumber },
      update: {},
      create: order,
    });
  }

  console.log('✅ Orders created');

  // Create order items
  const orderItems = [
    {
      companyId: 'COMP001',
      orderId: 'ORD001',
      productId: 'PROD001',
      quantity: 2,
      unitPrice: 1299.99,
      discount: 0,
      totalAmount: 2599.98,
    },
    {
      companyId: 'COMP001',
      orderId: 'ORD001',
      productId: 'PROD002',
      quantity: 5,
      unitPrice: 89.99,
      discount: 0,
      totalAmount: 449.95,
    },
    {
      companyId: 'COMP001',
      orderId: 'ORD002',
      productId: 'PROD003',
      quantity: 3,
      unitPrice: 299.99,
      discount: 0,
      totalAmount: 899.97,
    },
    {
      companyId: 'COMP001',
      orderId: 'ORD002',
      productId: 'PROD005',
      quantity: 10,
      unitPrice: 49.99,
      discount: 0,
      totalAmount: 499.90,
    },
  ];

  // Get the actual order IDs and product IDs from the database
  const order1 = await prisma.order.findUnique({ where: { orderNumber: 'ORD001' } });
  const order2 = await prisma.order.findUnique({ where: { orderNumber: 'ORD002' } });
  
  const product1 = await prisma.product.findUnique({ 
    where: { itemCode_companyId: { itemCode: 'PROD001', companyId: 'COMP001' } } 
  });
  const product2 = await prisma.product.findUnique({ 
    where: { itemCode_companyId: { itemCode: 'PROD002', companyId: 'COMP001' } } 
  });
  const product3 = await prisma.product.findUnique({ 
    where: { itemCode_companyId: { itemCode: 'PROD003', companyId: 'COMP001' } } 
  });
  const product5 = await prisma.product.findUnique({ 
    where: { itemCode_companyId: { itemCode: 'PROD005', companyId: 'COMP001' } } 
  });

  if (order1 && order2 && product1 && product2 && product3 && product5) {
    for (const item of orderItems) {
      const actualOrderId = item.orderId === 'ORD001' ? order1.id : order2.id;
      let actualProductId = '';
      
      if (item.productId === 'PROD001') actualProductId = product1.id;
      else if (item.productId === 'PROD002') actualProductId = product2.id;
      else if (item.productId === 'PROD003') actualProductId = product3.id;
      else if (item.productId === 'PROD005') actualProductId = product5.id;
      
      await prisma.orderItem.create({
        data: {
          ...item,
          orderId: actualOrderId,
          productId: actualProductId,
        },
      });
    }
  }

  console.log('✅ Order items created');

  // Create invoices with current dates
  const currentDate = new Date();
  const fiveDaysAgo = new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000);
  
  const invoices = [
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      documentNo: 'MR24-1926',
      docDate: new Date('2024-03-30'),
      docAmount: 20040.00,
      daysDue: 513,
      docType: 'Invoice',
      dueAmount: 20040.00,
      exeId: 'SALES001',
      refNo: 'REF001',
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      documentNo: 'AG24-0349',
      docDate: new Date('2024-08-08'),
      docAmount: 54044.70,
      daysDue: 383,
      docType: 'Invoice',
      dueAmount: 54044.70,
      exeId: 'SALES001',
      refNo: 'REF002',
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      documentNo: 'FB25-0504',
      docDate: new Date('2025-02-10'),
      docAmount: 20122.50,
      daysDue: 198,
      docType: 'Invoice',
      dueAmount: 20122.50,
      exeId: 'SALES001',
      refNo: 'REF003',
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      documentNo: 'AG25-0075',
      docDate: new Date('2025-08-02'),
      docAmount: 21500.00,
      daysDue: 21,
      docType: 'Invoice',
      dueAmount: 21500.00,
      exeId: 'SALES001',
      refNo: 'REF004',
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      documentNo: 'AG25-0076',
      docDate: new Date('2025-08-02'),
      docAmount: 48130.00,
      daysDue: 21,
      docType: 'Invoice',
      dueAmount: 48130.00,
      exeId: 'SALES001',
      refNo: 'REF005',
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      documentNo: 'AG25-1854',
      docDate: new Date('2025-08-25'),
      docAmount: 20500.00,
      daysDue: 0,
      docType: 'Invoice',
      dueAmount: 20500.00,
      exeId: 'SALES001',
      refNo: 'REF006',
    },
    // STAR GLASS HOUSE Invoices
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      documentNo: 'JN25-0010',
      docDate: new Date('2025-01-01'),
      docAmount: 75277.60,
      daysDue: 233,
      docType: 'Invoice',
      dueAmount: 75277.60,
      exeId: 'SALES001',
      refNo: 'REF007',
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      documentNo: 'MR25-1765',
      docDate: new Date('2025-03-27'),
      docAmount: 582498.84,
      daysDue: 154,
      docType: 'Invoice',
      dueAmount: 582498.84,
      exeId: 'SALES001',
      refNo: 'REF008',
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      documentNo: 'RT0000003797',
      docDate: new Date('2025-04-10'),
      docAmount: 527106.00,
      daysDue: 140,
      docType: 'Returned Cheque',
      dueAmount: 527106.00,
      exeId: 'SALES001',
      refNo: 'REF009',
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      documentNo: 'JU25-0037',
      docDate: new Date('2025-06-11'),
      docAmount: 937633.40,
      daysDue: 71,
      docType: 'Invoice',
      dueAmount: 937633.40,
      exeId: 'SALES001',
      refNo: 'REF010',
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      documentNo: 'JU25-0924',
      docDate: new Date('2025-06-17'),
      docAmount: 55765.50,
      daysDue: 71,
      docType: 'Invoice',
      dueAmount: 55765.50,
      exeId: 'SALES001',
      refNo: 'REF011',
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      documentNo: 'JL25-1448',
      docDate: new Date('2025-07-23'),
      docAmount: 484281.00,
      daysDue: 33,
      docType: 'Invoice',
      dueAmount: 484281.00,
      exeId: 'SALES001',
      refNo: 'REF012',
    },
    // ORIENT HARDWARE & ELECTRICALS Invoices
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JN25-1883',
      docDate: new Date('2025-01-29'),
      docAmount: 22390.40,
      daysDue: 209,
      docType: 'Invoice',
      dueAmount: 22390.40,
      exeId: 'SALES001',
      refNo: 'REF013',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'FB25-1035',
      docDate: new Date('2025-02-17'),
      docAmount: 36081.75,
      daysDue: 191,
      docType: 'Invoice',
      dueAmount: 36081.75,
      exeId: 'SALES001',
      refNo: 'REF014',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AP25-1108',
      docDate: new Date('2025-04-25'),
      docAmount: 65523.00,
      daysDue: 125,
      docType: 'Invoice',
      dueAmount: 65523.00,
      exeId: 'SALES001',
      refNo: 'REF015',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AP25-1422',
      docDate: new Date('2025-04-30'),
      docAmount: 11191.00,
      daysDue: 120,
      docType: 'Invoice',
      dueAmount: 11191.00,
      exeId: 'SALES001',
      refNo: 'REF016',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AP25-1423',
      docDate: new Date('2025-04-30'),
      docAmount: 52700.00,
      daysDue: 120,
      docType: 'Invoice',
      dueAmount: 52700.00,
      exeId: 'SALES001',
      refNo: 'REF017',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'MY25-0037',
      docDate: new Date('2025-05-05'),
      docAmount: 30000.00,
      daysDue: 115,
      docType: 'Invoice',
      dueAmount: 30000.00,
      exeId: 'SALES001',
      refNo: 'REF018',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'MY25-1293',
      docDate: new Date('2025-05-24'),
      docAmount: 21720.00,
      daysDue: 96,
      docType: 'Invoice',
      dueAmount: 21720.00,
      exeId: 'SALES001',
      refNo: 'REF019',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'MY25-1585',
      docDate: new Date('2025-05-28'),
      docAmount: 55110.00,
      daysDue: 85,
      docType: 'Invoice',
      dueAmount: 55110.00,
      exeId: 'SALES001',
      refNo: 'REF020',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JU25-0077',
      docDate: new Date('2025-06-11'),
      docAmount: 19250.00,
      daysDue: 77,
      docType: 'Invoice',
      dueAmount: 19250.00,
      exeId: 'SALES001',
      refNo: 'REF021',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JU25-0859',
      docDate: new Date('2025-06-17'),
      docAmount: 21780.00,
      daysDue: 70,
      docType: 'Invoice',
      dueAmount: 21780.00,
      exeId: 'SALES001',
      refNo: 'REF022',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JL25-0354',
      docDate: new Date('2025-07-08'),
      docAmount: 4330.00,
      daysDue: 47,
      docType: 'Invoice',
      dueAmount: 4330.00,
      exeId: 'SALES001',
      refNo: 'REF023',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JL25-1375',
      docDate: new Date('2025-07-23'),
      docAmount: 42681.00,
      daysDue: 31,
      docType: 'Invoice',
      dueAmount: 42681.00,
      exeId: 'SALES001',
      refNo: 'REF024',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JL25-2117',
      docDate: new Date('2025-07-31'),
      docAmount: 6600.00,
      daysDue: 27,
      docType: 'Invoice',
      dueAmount: 6600.00,
      exeId: 'SALES001',
      refNo: 'REF025',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'JL25-2176',
      docDate: new Date('2025-07-31'),
      docAmount: 2475.00,
      daysDue: 24,
      docType: 'Invoice',
      dueAmount: 2475.00,
      exeId: 'SALES001',
      refNo: 'REF026',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AG25-0840',
      docDate: new Date('2025-08-14'),
      docAmount: 33555.00,
      daysDue: 13,
      docType: 'Invoice',
      dueAmount: 33555.00,
      exeId: 'SALES001',
      refNo: 'REF027',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AG25-0858',
      docDate: new Date('2025-08-14'),
      docAmount: 17790.00,
      daysDue: 13,
      docType: 'Invoice',
      dueAmount: 17790.00,
      exeId: 'SALES001',
      refNo: 'REF028',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AG25-2107',
      docDate: new Date('2025-08-27'),
      docAmount: 5880.00,
      daysDue: 1,
      docType: 'Invoice',
      dueAmount: 5880.00,
      exeId: 'SALES001',
      refNo: 'REF029',
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      documentNo: 'AG25-2108',
      docDate: new Date('2025-08-27'),
      docAmount: 3937.50,
      daysDue: 1,
      docType: 'Invoice',
      dueAmount: 3937.50,
      exeId: 'SALES001',
      refNo: 'REF030',
    },
  ];

  for (const invoice of invoices) {
    await prisma.invoice.upsert({
      where: { documentNo: invoice.documentNo },
      update: {},
      create: invoice,
    });
  }

  console.log('✅ Invoices created');

  // Create payments with current dates
  const payments = [
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      transNo: 'PAY001',
      transDate: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      amtBc: 686111.95, // Cheque settlement amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      transNo: 'PAY002',
      transDate: new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      amtBc: 150614.04, // Sales return amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'WP03520',
      transNo: 'PAY003',
      transDate: new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      amtBc: 60191.60, // Debtor CRN amount from image
      remUnappl: 0,
    },
    // STAR GLASS HOUSE Payments
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      transNo: 'PAY004',
      transDate: new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      amtBc: 1139819.00, // Cash settlement amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      transNo: 'PAY005',
      transDate: new Date(currentDate.getTime() - 20 * 24 * 60 * 60 * 1000), // 20 days ago
      amtBc: 20168294.72, // Cheque settlement amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      transNo: 'PAY006',
      transDate: new Date(currentDate.getTime() - 25 * 24 * 60 * 60 * 1000), // 25 days ago
      amtBc: 126775.00, // Sales return amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      transNo: 'PAY007',
      transDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
      amtBc: 125672.80, // Late discounts amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      transNo: 'PAY008',
      transDate: new Date(currentDate.getTime() - 35 * 24 * 60 * 60 * 1000), // 35 days ago
      amtBc: 1392238.02, // Debtor CRN amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'SA02355',
      transNo: 'PAY009',
      transDate: new Date(currentDate.getTime() - 40 * 24 * 60 * 60 * 1000), // 40 days ago
      amtBc: 1403989.02, // Debtor DBN amount from image
      remUnappl: 0,
    },
    // ORIENT HARDWARE & ELECTRICALS Payments
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY010',
      transDate: new Date(currentDate.getTime() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
      amtBc: 25745.00, // Cash settlement amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY011',
      transDate: new Date(currentDate.getTime() - 50 * 24 * 60 * 60 * 1000), // 50 days ago
      amtBc: 1329269.40, // Cheque settlement amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY012',
      transDate: new Date(currentDate.getTime() - 55 * 24 * 60 * 60 * 1000), // 55 days ago
      amtBc: 41250.00, // Sales return amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY013',
      transDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
      amtBc: 2087.76, // Late discounts amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY014',
      transDate: new Date(currentDate.getTime() - 65 * 24 * 60 * 60 * 1000), // 65 days ago
      amtBc: 58409.00, // Debtor CRN amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY015',
      transDate: new Date(currentDate.getTime() - 70 * 24 * 60 * 60 * 1000), // 70 days ago
      amtBc: 57564.00, // Debtor DBN amount from image
      remUnappl: 0,
    },
    {
      companyId: 'COMP001',
      customerId: 'OK03747',
      transNo: 'PAY016',
      transDate: new Date(currentDate.getTime() - 75 * 24 * 60 * 60 * 1000), // 75 days ago
      amtBc: 27991.00, // Returned cheque amount from image
      remUnappl: 0,
    },
  ];

  for (const payment of payments) {
    await prisma.payment.upsert({
      where: { transNo: payment.transNo },
      update: {},
      create: payment,
    });
  }

  console.log('✅ Payments created');

  // Create document numbering
  await prisma.documentNumbering.upsert({
    where: { salespersonId: 'SALES001' },
    update: {},
    create: {
      companyId: 'COMP001',
      salespersonId: 'SALES001',
      prefix: 'ORD',
      currentNumber: 3,
    },
  });

  console.log('✅ Document numbering created');

  // Create sales reports with current month dates
  const reportDate = new Date();
  const reportMonth = reportDate.getMonth() + 1;
  const reportYear = reportDate.getFullYear();
  
  // Create dates within current month
  const currentMonthDate1 = new Date(reportYear, reportMonth - 1, 15); // 15th of current month
  const currentMonthDate2 = new Date(reportYear, reportMonth - 1, 20); // 20th of current month
  
  const salesReports = [
    {
      companyId: 'COMP001',
      date: currentMonthDate1,
      customerId: 'WP03520',
      customerName: 'WELCOME HARDWARE',
      city: 'Panadura',
      province: 'Western',
      productId: 'PROD001',
      productName: 'Laptop Computer - Dell XPS 13',
      category: 'Electronics',
      subCategory: 'Computers',
      quantity: 2,
      unitPrice: 1299.99,
      totalSales: 2599.98,
      discount: 0,
      netSales: 2599.98,
    },
    {
      companyId: 'COMP001',
      date: currentMonthDate2,
      customerId: 'WP03520',
      customerName: 'WELCOME HARDWARE',
      city: 'Panadura',
      province: 'Western',
      productId: 'PROD002',
      productName: 'Wireless Mouse - Logitech MX Master',
      category: 'Electronics',
      subCategory: 'Accessories',
      quantity: 5,
      unitPrice: 89.99,
      totalSales: 449.95,
      discount: 0,
      netSales: 449.95,
    },
    {
      companyId: 'COMP001',
      date: currentMonthDate2,
      customerId: 'SA02355',
      customerName: 'STAR GLASS HOUSE',
      city: 'Anuradhapura',
      province: 'North Central',
      productId: 'PROD003',
      productName: 'Office Chair - Ergonomic Design',
      category: 'Furniture',
      subCategory: 'Office',
      quantity: 3,
      unitPrice: 299.99,
      totalSales: 899.97,
      discount: 50.00,
      netSales: 849.97,
    },
    // STAR GLASS HOUSE Sales Reports
    {
      companyId: 'COMP001',
      date: new Date(reportYear, reportMonth - 1, 5), // 5th of current month
      customerId: 'SA02355',
      customerName: 'STAR GLASS HOUSE',
      city: 'Anuradhapura',
      province: 'North Central',
      productId: 'PROD004',
      productName: 'Printer - HP LaserJet Pro',
      category: 'Electronics',
      subCategory: 'Printers',
      quantity: 2,
      unitPrice: 399.99,
      totalSales: 799.98,
      discount: 0,
      netSales: 799.98,
    },
    {
      companyId: 'COMP001',
      date: new Date(reportYear, reportMonth - 1, 12), // 12th of current month
      customerId: 'SA02355',
      customerName: 'STAR GLASS HOUSE',
      city: 'Anuradhapura',
      province: 'North Central',
      productId: 'PROD005',
      productName: 'Desk Lamp - LED Adjustable',
      category: 'Furniture',
      subCategory: 'Lighting',
      quantity: 8,
      unitPrice: 49.99,
      totalSales: 399.92,
      discount: 25.00,
      netSales: 374.92,
    },
    // ORIENT HARDWARE & ELECTRICALS Sales Reports
    {
      companyId: 'COMP001',
      date: new Date(reportYear, reportMonth - 1, 8), // 8th of current month
      customerId: 'OK03747',
      customerName: 'ORIENT HARDWARE & ELECTRICALS',
      city: 'Kalutara',
      province: 'Western',
      productId: 'PROD001',
      productName: 'Laptop Computer - Dell XPS 13',
      category: 'Electronics',
      subCategory: 'Computers',
      quantity: 1,
      unitPrice: 1299.99,
      totalSales: 1299.99,
      discount: 0,
      netSales: 1299.99,
    },
    {
      companyId: 'COMP001',
      date: new Date(reportYear, reportMonth - 1, 15), // 15th of current month
      customerId: 'OK03747',
      customerName: 'ORIENT HARDWARE & ELECTRICALS',
      city: 'Kalutara',
      province: 'Western',
      productId: 'PROD002',
      productName: 'Wireless Mouse - Logitech MX Master',
      category: 'Electronics',
      subCategory: 'Accessories',
      quantity: 3,
      unitPrice: 89.99,
      totalSales: 269.97,
      discount: 15.00,
      netSales: 254.97,
    },
  ];

  for (const report of salesReports) {
    await prisma.salesReport.create({
      data: report,
    });
  }

  console.log('✅ Sales reports created');

  console.log('🎉 Database seeding completed successfully!');
  console.log('');
  console.log('📋 Login Credentials:');
  console.log('   Company ID: COMP001');
  console.log('   Admin - Username: admin, Password: admin123');
  console.log('   Sales - Username: john, Password: sales123');
  console.log('');
  console.log('📊 Demo Data Summary:');
  console.log('   • 2 Users (Admin + Sales)');
  console.log('   • 3 Customers (WELCOME HARDWARE, STAR GLASS HOUSE & ORIENT HARDWARE)');
  console.log('   • 5 Products');
  console.log('   • 2 Orders with Items');
  console.log('   • 30 Invoices (matching real-world data)');
  console.log('   • 16 Payments (various types)');
  console.log('   • Sales Reports');
  console.log('');
  console.log('💰 WELCOME HARDWARE Financial Summary:');
  console.log('   • Total Outstanding: 136,662.16');
  console.log('   • Average Collection Days: 125');
  console.log('   • Credit Limit: 0.00 (Exceeded)');
  console.log('   • Contact: M.N.M RIFKY (0777880688)');
  console.log('');
  console.log('💰 STAR GLASS HOUSE Financial Summary:');
  console.log('   • Total Outstanding: 3,389,637.73');
  console.log('   • Average Collection Days: 110.47');
  console.log('   • Credit Limit: 200,000.00 (Exceeded)');
  console.log('   • Contact: SJH (0252-227422)');
  console.log('   • Address: 4,5-MUSLIM MOSQUE ROAD, ANURADHAPUA');
  console.log('');
  console.log('💰 ORIENT HARDWARE & ELECTRICALS Financial Summary:');
  console.log('   • Total Outstanding: 394,523.94');
  console.log('   • Average Collection Days: 108.41');
  console.log('   • Credit Limit: 0.00 (Exceeded)');
  console.log('   • Contact: M.K.M HISHAM (072-6202103)');
  console.log('   • Address: 36 C, MOSQUE STREET, KALUTARA SOUTH');
  console.log('');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 