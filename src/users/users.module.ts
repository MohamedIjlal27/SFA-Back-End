import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserIdGenerator } from './user-id-generator.util';
import { PasswordGenerator } from './password-generator.util';
import { DatabaseModule } from '../database/database.module';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [DatabaseModule, SmsModule],
  controllers: [UsersController],
  providers: [UsersService, UserIdGenerator, PasswordGenerator],
  exports: [UsersService],
})
export class UsersModule {} 