import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { KidController } from 'src/kid/kid.controller';
import { KidService } from 'src/shared/services/kid.service';
import { Kid } from 'src/shared/models/kid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kid])],
  controllers: [KidController],
  providers: [KidService],
})
export class KidModule { }
