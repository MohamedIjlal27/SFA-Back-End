import { Module } from '@nestjs/common';
import { MirrorGateway } from './mirror.gateway';

@Module({
  providers: [MirrorGateway],
  exports: [MirrorGateway],
})
export class MirrorModule {} 