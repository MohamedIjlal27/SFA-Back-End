import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PrismaService } from '../database/prisma.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({ 
    status: 200, 
    description: 'Application health status',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ok' },
        timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        env: { type: 'string', example: 'production' },
        database: { type: 'string', example: 'connected' },
        uptime: { type: 'number', example: 123.45 }
      }
    }
  })
  async check() {
    let databaseStatus = 'unknown';
    
    try {
      // Test database connection
      await this.prisma.$queryRaw`SELECT 1`;
      databaseStatus = 'connected';
    } catch (error) {
      databaseStatus = 'disconnected';
      console.error('Health check database error:', error);
    }

    return {
      status: databaseStatus === 'connected' ? 'ok' : 'error',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV || 'unknown',
      database: databaseStatus,
      uptime: process.uptime(),
      databaseUrl: process.env.DATABASE_URL ? 'configured' : 'missing'
    };
  }
} 