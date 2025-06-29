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
    // Get current period data
    const currentPeriodStart = new Date();
    currentPeriodStart.setMonth(currentPeriodStart.getMonth() - 1); // Last month
    
    const currentPeriodEnd = new Date();
    
    // Get previous period data for growth calculation
    const previousPeriodStart = new Date(currentPeriodStart);
    previousPeriodStart.setMonth(previousPeriodStart.getMonth() - 1);
    
    const previousPeriodEnd = new Date(currentPeriodStart);
    previousPeriodEnd.setDate(previousPeriodEnd.getDate() - 1);

    // Get current period customers
    const currentCustomers = await this.prisma.salesReport.groupBy({
      by: ['customerId', 'customerName', 'city', 'province'],
      where: {
        netSales: { gt: 0 },
        date: {
          gte: currentPeriodStart,
          lte: currentPeriodEnd,
        },
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

    // Get previous period data for growth calculation
    const previousCustomers = await this.prisma.salesReport.groupBy({
      by: ['customerId'],
      where: {
        netSales: { gt: 0 },
        date: {
          gte: previousPeriodStart,
          lte: previousPeriodEnd,
        },
      },
      _sum: {
        netSales: true,
      },
    });

    // Create a map for previous period data
    const previousDataMap = new Map();
    previousCustomers.forEach(customer => {
      previousDataMap.set(customer.customerId, Number(customer._sum.netSales));
    });

    // Calculate total sales for percentage calculation
    const totalSales = currentCustomers.reduce(
      (sum, customer) => sum + Number(customer._sum.netSales),
      0,
    );

    return currentCustomers.map(customer => {
      const currentSales = Number(customer._sum.netSales);
      const previousSales = previousDataMap.get(customer.customerId) || 0;
      const growth = previousSales > 0 ? ((currentSales - previousSales) / previousSales) * 100 : 0;

      return {
        customerId: customer.customerId,
        customerName: customer.customerName,
        city: customer.city,
        province: customer.province,
        totalSales: currentSales,
        totalPurchases: customer._count.id,
        percentageOfTotal: totalSales > 0 ? (currentSales / totalSales) * 100 : 0,
        growth: growth,
        categories: {}, // Will be populated if needed
      };
    });
  }

  async getTopProducts(limit: number = 20) {
    // Get current period data
    const currentPeriodStart = new Date();
    currentPeriodStart.setMonth(currentPeriodStart.getMonth() - 1); // Last month
    
    const currentPeriodEnd = new Date();
    
    // Get previous period data for growth calculation
    const previousPeriodStart = new Date(currentPeriodStart);
    previousPeriodStart.setMonth(previousPeriodStart.getMonth() - 1);
    
    const previousPeriodEnd = new Date(currentPeriodStart);
    previousPeriodEnd.setDate(previousPeriodEnd.getDate() - 1);

    // Get current period products
    const currentProducts = await this.prisma.salesReport.groupBy({
      by: ['productId', 'productName', 'category', 'subCategory'],
      where: {
        netSales: { gt: 0 },
        date: {
          gte: currentPeriodStart,
          lte: currentPeriodEnd,
        },
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

    // Get previous period data for growth calculation
    const previousProducts = await this.prisma.salesReport.groupBy({
      by: ['productId'],
      where: {
        netSales: { gt: 0 },
        date: {
          gte: previousPeriodStart,
          lte: previousPeriodEnd,
        },
      },
      _sum: {
        netSales: true,
      },
    });

    // Create a map for previous period data
    const previousDataMap = new Map();
    previousProducts.forEach(product => {
      previousDataMap.set(product.productId, Number(product._sum.netSales));
    });

    // Calculate total sales for percentage calculation
    const totalSales = currentProducts.reduce(
      (sum, product) => sum + Number(product._sum.netSales),
      0,
    );

    return currentProducts.map(product => {
      const currentSales = Number(product._sum.netSales);
      const previousSales = previousDataMap.get(product.productId) || 0;
      const growth = previousSales > 0 ? ((currentSales - previousSales) / previousSales) * 100 : 0;

      return {
        productId: product.productId,
        productName: product.productName,
        category: product.category,
        subCategory: product.subCategory,
        quantity: Number(product._sum.quantity),
        totalSales: currentSales,
        percentageOfTotal: totalSales > 0 ? (currentSales / totalSales) * 100 : 0,
        growth: growth,
      };
    });
  }

  async getCategorySales() {
    // Get current period data
    const currentPeriodStart = new Date();
    currentPeriodStart.setMonth(currentPeriodStart.getMonth() - 1); // Last month
    
    const currentPeriodEnd = new Date();
    
    // Get previous period data for growth calculation
    const previousPeriodStart = new Date(currentPeriodStart);
    previousPeriodStart.setMonth(previousPeriodStart.getMonth() - 1);
    
    const previousPeriodEnd = new Date(currentPeriodStart);
    previousPeriodEnd.setDate(previousPeriodEnd.getDate() - 1);

    // Get current period categories
    const currentCategories = await this.prisma.salesReport.groupBy({
      by: ['category'],
      where: {
        netSales: { gt: 0 },
        date: {
          gte: currentPeriodStart,
          lte: currentPeriodEnd,
        },
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

    // Get previous period data for growth calculation
    const previousCategories = await this.prisma.salesReport.groupBy({
      by: ['category'],
      where: {
        netSales: { gt: 0 },
        date: {
          gte: previousPeriodStart,
          lte: previousPeriodEnd,
        },
      },
      _sum: {
        netSales: true,
      },
    });

    // Create a map for previous period data
    const previousDataMap = new Map();
    previousCategories.forEach(category => {
      previousDataMap.set(category.category, Number(category._sum.netSales));
    });

    const totalSales = currentCategories.reduce(
      (sum, cat) => sum + Number(cat._sum.netSales),
      0,
    );

    return currentCategories.map(category => {
      const currentSales = Number(category._sum.netSales);
      const previousSales = previousDataMap.get(category.category) || 0;
      const growth = previousSales > 0 ? ((currentSales - previousSales) / previousSales) * 100 : 0;

      return {
        category: category.category,
        totalSales: currentSales,
        percentageOfTotal: totalSales > 0 ? (currentSales / totalSales) * 100 : 0,
        growth: growth,
      };
    });
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
    // Get current period data
    const currentPeriodStart = new Date();
    currentPeriodStart.setMonth(currentPeriodStart.getMonth() - 1); // Last month
    
    const currentPeriodEnd = new Date();

    // Get all unique products by category from sales data
    const categoryStats = await this.prisma.salesReport.groupBy({
      by: ['category'],
      where: {
        date: {
          gte: currentPeriodStart,
          lte: currentPeriodEnd,
        },
      },
      _count: {
        productId: true,
      },
    });

    // Get sold products by category (products with sales > 0)
    const soldProductsByCategory = await this.prisma.salesReport.groupBy({
      by: ['category'],
      where: {
        quantity: { gt: 0 },
        netSales: { gt: 0 },
        date: {
          gte: currentPeriodStart,
          lte: currentPeriodEnd,
        },
      },
      _count: {
        productId: true,
      },
      _sum: {
        netSales: true,
      },
    });

    // Get total sales for potential increase calculation
    const totalSales = soldProductsByCategory.reduce(
      (sum, category) => sum + Number(category._sum.netSales),
      0,
    );

    const insights = categoryStats.map(category => {
      const soldCategory = soldProductsByCategory.find(
        sold => sold.category === category.category,
      );
      
      const soldCount = soldCategory?._count.productId || 0;
      const categorySales = soldCategory ? Number(soldCategory._sum.netSales) : 0;
      
      const coverage = category._count.productId > 0 
        ? (soldCount / category._count.productId) * 100 
        : 0;
      
      // Calculate potential increase based on unsold products
      const unsoldProducts = category._count.productId - soldCount;
      const avgProductSales = soldCount > 0 ? categorySales / soldCount : 0;
      const potentialIncrease = unsoldProducts * avgProductSales;

      let recommendation = '';
      if (coverage < 25) {
        recommendation = 'Low coverage - Focus on promoting this category and training sales team';
      } else if (coverage < 50) {
        recommendation = 'Moderate coverage - Consider targeted marketing and product bundling';
      } else if (coverage < 75) {
        recommendation = 'Good coverage - Focus on remaining products and cross-selling';
      } else if (coverage < 90) {
        recommendation = 'Very good coverage - Optimize pricing for remaining products';
      } else {
        recommendation = 'Excellent coverage - Maintain current strategy and explore new markets';
      }

      return {
        category: category.category,
        coverage: Math.round(coverage * 100) / 100,
        potentialIncrease: Math.round(potentialIncrease * 100) / 100,
        recommendation,
        totalProducts: category._count.productId,
        soldProducts: soldCount,
        categorySales: Math.round(categorySales * 100) / 100,
      };
    });

    // Sort by coverage (ascending) to show areas needing attention first
    return insights.sort((a, b) => a.coverage - b.coverage);
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