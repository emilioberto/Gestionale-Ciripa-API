import { Module } from '@nestjs/common';
import { KidController } from './kid.controller';

@Module({
  controllers: [KidController]
})
export class KidModule {}
