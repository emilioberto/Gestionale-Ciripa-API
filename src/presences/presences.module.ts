import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Presence } from '../shared/models/presence.entity';
import { Kid } from '../shared/models/kid.entity';
import { PresencesController } from './presences.controller';
import { PresencesService } from '../shared/services/presences.service';

@Module({
  imports: [TypeOrmModule.forFeature([Kid, Presence])],
  controllers: [PresencesController],
  providers: [PresencesService],
})
export class PresencesModule { }
