import { Controller, Get, Query, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('Reports')
@Controller('reports')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('sales')
  @ApiOperation({ summary: 'Get sales report' })
  @ApiResponse({
    status: 200,
    description: 'Sales report retrieved successfully',
  })
  async getSalesReport(
    @Request() req,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportsService.getSalesReport(req.user.companyId, startDate, endDate);
  }

  @Get('top-customers')
  @ApiOperation({ summary: 'Get top customers by sales' })
  @ApiResponse({
    status: 200,
    description: 'Top customers retrieved successfully',
  })
  async getTopCustomers(@Request() req, @Query('limit') limit?: number) {
    return this.reportsService.getTopCustomers(req.user.companyId, limit);
  }

  @Get('top-products')
  @ApiOperation({ summary: 'Get top products by sales' })
  @ApiResponse({
    status: 200,
    description: 'Top products retrieved successfully',
  })
  async getTopProducts(@Request() req, @Query('limit') limit?: number) {
    return this.reportsService.getTopProducts(req.user.companyId, limit);
  }

  @Get('category-sales')
  @ApiOperation({ summary: 'Get sales by category' })
  @ApiResponse({
    status: 200,
    description: 'Category sales retrieved successfully',
  })
  async getCategorySales(@Request() req) {
    return this.reportsService.getCategorySales(req.user.companyId);
  }

  @Get('city-sales')
  @ApiOperation({ summary: 'Get sales by city' })
  @ApiResponse({
    status: 200,
    description: 'City sales retrieved successfully',
  })
  async getCityWiseSales(@Request() req, @Query('limit') limit?: number) {
    return this.reportsService.getCityWiseSales(req.user.companyId, limit);
  }

  @Get('product/:productId/customers')
  @ApiOperation({ summary: 'Get customer sales for a specific product' })
  @ApiResponse({
    status: 200,
    description: 'Customer sales for product retrieved successfully',
  })
  async getCustomerSalesByProduct(
    @Request() req,
    @Param('productId') productId: string,
    @Query('limit') limit?: number,
  ) {
    return this.reportsService.getCustomerSalesByProduct(req.user.companyId, productId, limit);
  }

  @Get('category/:category/customers')
  @ApiOperation({ summary: 'Get customer sales for a specific category' })
  @ApiResponse({
    status: 200,
    description: 'Customer sales for category retrieved successfully',
  })
  async getCustomerSalesByCategory(
    @Request() req,
    @Param('category') category: string,
    @Query('limit') limit?: number,
  ) {
    return this.reportsService.getCustomerSalesByCategory(req.user.companyId, category, limit);
  }

  @Get('range-coverage-insights')
  @ApiOperation({ summary: 'Get range coverage insights' })
  @ApiResponse({
    status: 200,
    description: 'Range coverage insights retrieved successfully',
  })
  async getRangeCoverageInsights(@Request() req) {
    return this.reportsService.getRangeCoverageInsights(req.user.companyId);
  }

  @Get('customers/details')
  @ApiOperation({ summary: 'Get detailed customer information' })
  @ApiResponse({
    status: 200,
    description: 'Customer details retrieved successfully',
  })
  async getCustomerDetails(@Request() req) {
    return this.reportsService.getCustomerDetails(req.user.companyId);
  }

  @Get('products/coverage')
  @ApiOperation({ summary: 'Get product coverage analysis' })
  @ApiResponse({
    status: 200,
    description: 'Product coverage analysis retrieved successfully',
  })
  async getProductCoverage(@Request() req) {
    return this.reportsService.getProductCoverage(req.user.companyId);
  }

  @Get('dashboard/summary')
  @ApiOperation({ summary: 'Get dashboard summary metrics' })
  @ApiResponse({
    status: 200,
    description: 'Dashboard summary metrics retrieved successfully',
  })
  async getDashboardSummary(
    @Request() req,
    @Query('executiveId') executiveId?: string,
    @Query('month') month?: string,
    @Query('year') year?: string,
  ) {
    return this.reportsService.getDashboardSummary(req.user.companyId, executiveId, month, year);
  }
} 