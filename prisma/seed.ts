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
      customerId: 'CUST001',
      exeId: 'SALES001',
      companyId: 'COMP001',
      customerName: 'ABC Electronics',
      addr1: '123 Main Street',
      addr2: 'Suite 100',
      addr3: '',
      city: 'New York',
      route: 'Downtown',
      phone1: '+1-555-0101',
      phone2: '+1-555-0102',
      phone3: '',
      additional: 'Premium customer',
      isActive: true,
      grade: 'A',
      contactName: 'Mike Johnson',
      contactPhone: '+1-555-0103',
      creditLimit: 50000.00,
      creditPeriod: 30,
      startDate: new Date('2024-01-15'),
    },
    {
      customerId: 'CUST002',
      exeId: 'SALES001',
      companyId: 'COMP001',
      customerName: 'Tech Solutions Inc',
      addr1: '456 Business Ave',
      addr2: 'Floor 3',
      addr3: '',
      city: 'Los Angeles',
      route: 'Westside',
      phone1: '+1-555-0201',
      phone2: '+1-555-0202',
      phone3: '',
      additional: 'Regular customer',
      isActive: true,
      grade: 'B',
      contactName: 'Sarah Wilson',
      contactPhone: '+1-555-0203',
      creditLimit: 25000.00,
      creditPeriod: 15,
      startDate: new Date('2024-03-20'),
    },
    {
      customerId: 'CUST003',
      exeId: 'SALES001',
      companyId: 'COMP001',
      customerName: 'Global Systems',
      addr1: '789 Corporate Blvd',
      addr2: 'Building A',
      addr3: '',
      city: 'Chicago',
      route: 'Loop',
      phone1: '+1-555-0301',
      phone2: '+1-555-0302',
      phone3: '',
      additional: 'New customer',
      isActive: true,
      grade: 'C',
      contactName: 'David Brown',
      contactPhone: '+1-555-0303',
      creditLimit: 10000.00,
      creditPeriod: 7,
      startDate: new Date('2024-06-10'),
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
      customerId: 'CUST001',
      salespersonId: 'SALES001',
      companyId: 'COMP001',
      status: 'Completed',
      isDraft: false,
      jsonPayload: JSON.stringify({
        customerName: 'ABC Electronics',
        items: [
          { productId: 'PROD001', quantity: 2, unitPrice: 1299.99, discount: 0 },
          { productId: 'PROD002', quantity: 5, unitPrice: 89.99, discount: 0 },
        ]
      }),
    },
    {
      orderNumber: 'ORD002',
      customerId: 'CUST002',
      salespersonId: 'SALES001',
      companyId: 'COMP001',
      status: 'Pending',
      isDraft: false,
      jsonPayload: JSON.stringify({
        customerName: 'Tech Solutions Inc',
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
      customerId: 'CUST001',
      documentNo: 'INV001',
      docDate: fiveDaysAgo,
      docAmount: 3049.93,
      daysDue: 0,
      docType: 'Invoice',
      dueAmount: 3049.93,
      exeId: 'SALES001',
      refNo: 'REF001',
    },
    {
      companyId: 'COMP001',
      customerId: 'CUST002',
      documentNo: 'INV002',
      docDate: currentDate,
      docAmount: 1399.87,
      daysDue: 5,
      docType: 'Invoice',
      dueAmount: 1399.87,
      exeId: 'SALES001',
      refNo: 'REF002',
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
      customerId: 'CUST001',
      transNo: 'PAY001',
      transDate: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      amtBc: 3049.93,
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
      customerId: 'CUST001',
      customerName: 'ABC Electronics',
      city: 'New York',
      province: 'NY',
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
      customerId: 'CUST001',
      customerName: 'ABC Electronics',
      city: 'New York',
      province: 'NY',
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
      customerId: 'CUST002',
      customerName: 'Tech Solutions Inc',
      city: 'Los Angeles',
      province: 'CA',
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
  console.log('   • 3 Customers');
  console.log('   • 5 Products');
  console.log('   • 2 Orders with Items');
  console.log('   • 2 Invoices');
  console.log('   • 1 Payment');
  console.log('   • Sales Reports');
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