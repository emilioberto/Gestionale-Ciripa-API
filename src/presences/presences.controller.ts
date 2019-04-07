import { Controller, Get, Param, Put, Body } from '@nestjs/common';

import { UpdateResult } from 'typeorm';

import { PresencesService } from 'src/shared/services/presences.service';
import { Presence } from 'src/shared/models/presence.entity';
import { Kid } from 'src/shared/models/kid.entity';

@Controller('presences')
export class PresencesController {
  constructor(
    private presencesService: PresencesService,
  ) { }

  @Get(':date')
  async getKidsWithPresencesByDate(@Param('date') date: string): Promise<Presence[]> {
    return await this.presencesService.getKidsWithPresencesByDate(date);
  }

  @Put()
  async upsertPresences(@Body() attendance: { presencesList: Presence[] }): Promise<UpdateResult | Presence[]> {
    return await this.presencesService.upsertPresences(attendance.presencesList);
  }
}
