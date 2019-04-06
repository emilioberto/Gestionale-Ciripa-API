import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Kid } from 'src/shared/models/kid.entity';
import { PresencesService } from 'src/shared/services/presences.service';
import { PresencesController } from 'src/presences/presences.controller';
import { Presence } from 'src/shared/models/presence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kid, Presence])],
  controllers: [PresencesController],
  providers: [PresencesService],
})
export class PresencesModule { }
