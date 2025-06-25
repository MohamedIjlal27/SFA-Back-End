import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getSalesReport(startDate?: string, endDate?: string) {
    const whereClause: any = {};
    
    if (startDate && endDate) {
      whereClause.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const salesData = await this.prisma.salesReport.findMany({
      where: whereClause,
      orderBy: { date: 'desc' },
    });

    return salesData.map(sale => ({
      id: sale.id,
      date: sale.date.toISOString().split('T')[0],
      customerId: sale.customerId,
      customerName: sale.customerName,
      city: sale.city,
      province: sale.province,
      productId: sale.productId,
      productName: sale.productName,
      category: sale.category,
      subCategory: sale.subCategory,
      quantity: sale.quantity,
      unitPrice: Number(sale.unitPrice),
      totalSales: Number(sale.totalSales),
      discount: Number(sale.discount),
      netSales: Number(sale.netSales),
    }));
  }

  async getTopCustomers(limit: number = 20) {
    const customers = await this.prisma.salesReport.groupBy({
      by: ['customerId', 'customerName', 'city', 'province'],
      where: {
        netSales: { gt: 0 },
      },
      _sum: {
        netSales: true,
        quantity: true,
      },
      _count: {
        id: true,
      },
      orderBy: {
        _sum: {
          netSales: 'desc',
        },
      },
      take: limit,
    });

    return customers.map(customer => ({
      customerId: customer.customerId,
      customerName: customer.customerName,
      city: customer.city,
      province: customer.province,
      totalSales: Number(customer._sum.netSales),
      totalPurchases: customer._count.id,
      percentageOfTotal: 0, // Will be calculated in controller
      growth: 0, // Will be calculated in controller
    }));
  }

  async getTopProducts(limit: number = 20) {
    const products = await this.prisma.salesReport.groupBy({
      by: ['productId', 'productName', 'category', 'subCategory'],
      where: {
        netSales: { gt: 0 },
      },
      _sum: {
        netSales: true,
        quantity: true,
      },
      _count: {
        id: true,
      },
      orderBy: {
        _sum: {
          netSales: 'desc',
        },
      },
      take: limit,
    });

    return products.map(product => ({
      productId: product.productId,
      productName: product.productName,
      category: product.category,
      subCategory: product.subCategory,
      quantity: Number(product._sum.quantity),
      totalSales: Number(product._sum.netSales),
      percentageOfTotal: 0, // Will be calculated in controller
      growth: 0, // Will be calculated in controller
    }));
  }

  async getCategorySales() {
    const categories = await this.prisma.salesReport.groupBy({
      by: ['category'],
      where: {
        netSales: { gt: 0 },
      },
      _sum: {
        netSales: true,
      },
      orderBy: {
        _sum: {
          netSales: 'desc',
        },
      },
    });

    const totalSales = categories.reduce(
      (sum, cat) => sum + Number(cat._sum.netSales),
      0,
    );

    return categories.map(category => ({
      category: category.category,
      totalSales: Number(category._sum.netSales),
      percentageOfTotal: totalSales > 0 ? (Number(category._sum.netSales) / totalSales) * 100 : 0,
      growth: 0, // Will be calculated in controller
    }));
  }

  async getCityWiseSales(limit: number = 10) {
    const cities = await this.prisma.salesReport.groupBy({
      by: ['city', 'province'],
      where: {
        netSales: { gt: 0 },
      },
      _sum: {
        netSales: true,
      },
      orderBy: {
        _sum: {
          netSales: 'desc',
        },
      },
      take: limit,
    });

    return cities.map(city => ({
      city: city.city,
      province: city.province,
      totalSales: Number(city._sum.netSales),
      percentageOfTotal: 0, // Will be calculated in controller
      topProducts: [], // Will be populated in controller
      topCategories: [], // Will be populated in controller
    }));
  }

  async getCustomerSalesByProduct(productId: string, limit: number = 10) {
    const customers = await this.prisma.salesReport.groupBy({
      by: ['customerId', 'customerName', 'city'],
      where: {
        productId,
        netSales: { gt: 0 },
      },
      _sum: {
        netSales: true,
        quantity: true,
      },
      orderBy: {
        _sum: {
          netSales: 'desc',
        },
      },
      take: limit,
    });

    const totalProductSales = customers.reduce(
      (sum, customer) => sum + Number(customer._sum.netSales),
      0,
    );

    return customers.map(customer => ({
      customerId: customer.customerId,
      customerName: customer.customerName,
      city: customer.city,
      quantity: Number(customer._sum.quantity),
      totalSales: Number(customer._sum.netSales),
      percentageOfProductSales: totalProductSales > 0 ? (Number(customer._sum.netSales) / totalProductSales) * 100 : 0,
    }));
  }

  async getCustomerSalesByCategory(category: string, limit: number = 10) {
    const customers = await this.prisma.salesReport.groupBy({
      by: ['customerId', 'customerName', 'city'],
      where: {
        category,
        netSales: { gt: 0 },
      },
      _sum: {
        netSales: true,
      },
      orderBy: {
        _sum: {
          netSales: 'desc',
        },
      },
      take: limit,
    });

    const totalCategorySales = customers.reduce(
      (sum, customer) => sum + Number(customer._sum.netSales),
      0,
    );

    return customers.map(customer => ({
      customerId: customer.customerId,
      customerName: customer.customerName,
      city: customer.city,
      totalSales: Number(customer._sum.netSales),
      percentageOfCategorySales: totalCategorySales > 0 ? (Number(customer._sum.netSales) / totalCategorySales) * 100 : 0,
    }));
  }

  async getRangeCoverageInsights() {
    // Get all categories and their product counts
    const categoryStats = await this.prisma.salesReport.groupBy({
      by: ['category'],
      _count: {
        productId: true,
      },
    });

    // Get sold products by category
    const soldProductsByCategory = await this.prisma.salesReport.groupBy({
      by: ['category'],
      where: {
        quantity: { gt: 0 },
      },
      _count: {
        productId: true,
      },
    });

    const insights = categoryStats.map(category => {
      const soldCount = soldProductsByCategory.find(
        sold => sold.category === category.category,
      )?._count.productId || 0;
      
      const coverage = category._count.productId > 0 
        ? (soldCount / category._count.productId) * 100 
        : 0;
      
      const potentialIncrease = coverage < 100 
        ? ((100 - coverage) / 100) * 100 
        : 0;

      let recommendation = '';
      if (coverage < 30) {
        recommendation = 'Focus on promoting this category to increase sales';
      } else if (coverage < 60) {
        recommendation = 'Consider targeted marketing for underperforming products';
      } else if (coverage < 90) {
        recommendation = 'Good coverage, focus on remaining products';
      } else {
        recommendation = 'Excellent coverage, maintain current strategy';
      }

      return {
        category: category.category,
        coverage: Math.round(coverage * 100) / 100,
        potentialIncrease: Math.round(potentialIncrease * 100) / 100,
        recommendation,
      };
    });

    return insights;
  }

  async getCustomerDetails() {
    const customers = await this.prisma.salesReport.groupBy({
      by: ['customerId', 'customerName', 'city', 'province'],
      _sum: {
        netSales: true,
        quantity: true,
      },
      _count: {
        id: true,
      },
    });

    return customers.map(customer => ({
      id: customer.customerId,
      name: customer.customerName,
      city: customer.city,
      province: customer.province,
      totalPurchases: Number(customer._sum.netSales),
      totalOrders: customer._count.id,
      averageOrderValue: customer._count.id > 0 
        ? Number(customer._sum.netSales) / customer._count.id 
        : 0,
    }));
  }

  async getProductCoverage() {
    // Get all products
    const allProducts = await this.prisma.salesReport.groupBy({
      by: ['productId', 'productName', 'category', 'subCategory'],
      _sum: {
        quantity: true,
        netSales: true,
      },
    });

    // Get products that have been sold
    const soldProducts = allProducts.filter(product => 
      Number(product._sum.quantity) > 0
    );

    const totalProducts = allProducts.length;
    const soldProductsCount = soldProducts.length;
    const coverage = totalProducts > 0 ? (soldProductsCount / totalProducts) * 100 : 0;

    return {
      totalProducts,
      soldProducts: soldProductsCount,
      coverage: Math.round(coverage * 100) / 100,
      topSellingProducts: soldProducts
        .sort((a, b) => Number(b._sum.netSales) - Number(a._sum.netSales))
        .slice(0, 10)
        .map(product => ({
          productId: product.productId,
          productName: product.productName,
          category: product.category,
          subCategory: product.subCategory,
          totalSales: Number(product._sum.netSales),
          quantity: Number(product._sum.quantity),
        })),
    };
  }

  async getDashboardSummary(executiveId?: string, month?: string, year?: string) {
    // Build date filter for current month/year
    const currentDate = new Date();
    const currentMonth = month || (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentYear = year || currentDate.getFullYear().toString();
    
    const startDate = new Date(`${currentYear}-${currentMonth}-01`);
    const endDate = new Date(parseInt(currentYear), parseInt(currentMonth), 0); // Last day of month

    // Build where clause
    const whereClause: any = {
      date: {
        gte: startDate,
        lte: endDate,
      },
    };

    // Fix: Filter by executive's customers
    if (executiveId) {
      const customers = await this.prisma.customer.findMany({
        where: { exeId: executiveId },
        select: { customerId: true },
      });
      const customerIds = customers.map(c => c.customerId);
      whereClause.customerId = { in: customerIds };
    }

    // Get current month data
    const currentMonthData = await this.prisma.salesReport.findMany({
      where: whereClause,
    });

    // Get previous month data for comparison
    const prevMonth = parseInt(currentMonth) === 1 ? 12 : parseInt(currentMonth) - 1;
    const prevYear = parseInt(currentMonth) === 1 ? parseInt(currentYear) - 1 : parseInt(currentYear);
    
    const prevStartDate = new Date(`${prevYear}-${prevMonth.toString().padStart(2, '0')}-01`);
    const prevEndDate = new Date(prevYear, prevMonth, 0);

    const prevWhereClause: any = {
      date: {
        gte: prevStartDate,
        lte: prevEndDate,
      },
    };
    if (executiveId) {
      // Use same customerIds for previous month
      const customers = await this.prisma.customer.findMany({
        where: { exeId: executiveId },
        select: { customerId: true },
      });
      const customerIds = customers.map(c => c.customerId);
      prevWhereClause.customerId = { in: customerIds };
    }

    const prevMonthData = await this.prisma.salesReport.findMany({
      where: prevWhereClause,
    });

    // Calculate metrics
    const currentTotalSales = currentMonthData.reduce((sum, sale) => sum + Number(sale.netSales), 0);
    const currentTotalCollections = currentMonthData.reduce((sum, sale) => sum + Number(sale.totalSales), 0);
    const currentReturns = currentMonthData.filter(sale => Number(sale.discount) > 0)
      .reduce((sum, sale) => sum + Number(sale.discount), 0);
    const currentReplacements = currentMonthData.filter(sale => sale.category === 'Replacement')
      .reduce((sum, sale) => sum + Number(sale.netSales), 0);

    const prevTotalSales = prevMonthData.reduce((sum, sale) => sum + Number(sale.netSales), 0);
    const prevTotalCollections = prevMonthData.reduce((sum, sale) => sum + Number(sale.totalSales), 0);
    const prevReturns = prevMonthData.filter(sale => Number(sale.discount) > 0)
      .reduce((sum, sale) => sum + Number(sale.discount), 0);
    const prevReplacements = prevMonthData.filter(sale => sale.category === 'Replacement')
      .reduce((sum, sale) => sum + Number(sale.netSales), 0);

    // Calculate percentages
    const salesPercentage = prevTotalSales > 0 ? ((currentTotalSales - prevTotalSales) / prevTotalSales) * 100 : 0;
    const collectionsPercentage = prevTotalCollections > 0 ? ((currentTotalCollections - prevTotalCollections) / prevTotalCollections) * 100 : 0;
    const returnsPercentage = prevReturns > 0 ? ((currentReturns - prevReturns) / prevReturns) * 100 : 0;
    const replacementsPercentage = prevReplacements > 0 ? ((currentReplacements - prevReplacements) / prevReplacements) * 100 : 0;

    return {
      period: {
        month: currentMonth,
        year: currentYear,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
      },
      metrics: {
        sales: {
          value: currentTotalSales,
          percentage: Math.round(salesPercentage * 100) / 100,
          formattedValue: currentTotalSales.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        },
        collections: {
          value: currentTotalCollections,
          percentage: Math.round(collectionsPercentage * 100) / 100,
          formattedValue: currentTotalCollections.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        },
        returns: {
          value: currentReturns,
          percentage: Math.round(returnsPercentage * 100) / 100,
          formattedValue: currentReturns.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        },
        replacements: {
          value: currentReplacements,
          percentage: Math.round(replacementsPercentage * 100) / 100,
          formattedValue: currentReplacements.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        },
      },
      summary: {
        totalTransactions: currentMonthData.length,
        totalCustomers: new Set(currentMonthData.map(sale => sale.customerId)).size,
        totalProducts: new Set(currentMonthData.map(sale => sale.productId)).size,
      },
    };
  }
} 