import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';
import { DatabaseModule } from './database/database.module';
import { HealthController } from './health/health.controller';
import { MirrorModule } from './mirror/mirror.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    AuthModule,
    CustomersModule,
    ProductsModule,
    OrdersModule,
    ReportsModule,
    MirrorModule,
    UsersModule,
    EmailModule,
  ],
  controllers: [HealthController],
})
export class AppModule {} 