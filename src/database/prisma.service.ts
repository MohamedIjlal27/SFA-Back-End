import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    try {
      console.log('🔌 Attempting to connect to database...');
      console.log('Database URL preview:', process.env.DATABASE_URL?.substring(0, 50) + '...');
      
      await this.$connect();
      console.log('✅ Successfully connected to database');
    } catch (error) {
      console.error('❌ Failed to connect to database:', error);
      console.error('Please check your DATABASE_URL environment variable');
      throw error;
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
} 