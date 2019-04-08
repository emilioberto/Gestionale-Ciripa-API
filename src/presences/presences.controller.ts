import { Controller, Get, Param, Put, Body } from '@nestjs/common';

import { PresencesService } from '../shared/services/presences.service';
import { Presence } from '../shared/models/presence.entity';

import { UpdateResult } from 'typeorm';

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
