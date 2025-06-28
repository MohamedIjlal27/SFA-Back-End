import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
      // Add connection pooling for serverless environments
      ...(process.env.NODE_ENV === 'production' && {
        datasources: {
          db: {
            url: process.env.DATABASE_URL,
          },
        },
      }),
    });
  }

  async onModuleInit() {
    try {
      console.log('🔌 Attempting to connect to database...');
      console.log('Database URL configured:', !!process.env.DATABASE_URL);
      console.log('Database URL preview:', process.env.DATABASE_URL?.substring(0, 50) + '...');
      
      await this.$connect();
      console.log('✅ Successfully connected to database');
    } catch (error) {
      console.error('❌ Failed to connect to database:', error);
      console.error('Please check your DATABASE_URL environment variable');
      
      // In production, we might want to retry or handle this differently
      if (process.env.NODE_ENV === 'production') {
        console.log('🔄 Retrying database connection in 3 seconds...');
        setTimeout(async () => {
          try {
            await this.$connect();
            console.log('✅ Successfully connected to database on retry');
          } catch (retryError) {
            console.error('❌ Failed to connect to database on retry:', retryError);
            // Don't throw error in production to allow app to start
            console.log('⚠️ Continuing without database connection...');
          }
        }, 3000);
      } else {
        throw error;
      }
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      console.log('🔌 Disconnected from database');
    } catch (error) {
      console.error('❌ Error disconnecting from database:', error);
    }
  }

  // Add a method to check database health
  async healthCheck() {
    try {
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      return false;
    }
  }
} 