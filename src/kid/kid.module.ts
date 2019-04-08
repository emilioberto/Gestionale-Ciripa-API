import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Kid } from '../shared/models/kid.entity';
import { KidController } from './kid.controller';
import { KidService } from '../shared/services/kid.service';

@Module({
  imports: [TypeOrmModule.forFeature([Kid])],
  controllers: [KidController],
  providers: [KidService],
})
export class KidModule { }
