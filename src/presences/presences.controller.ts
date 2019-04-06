import { Controller, Get, Param } from '@nestjs/common';

import { PresencesService } from 'src/shared/services/presences.service';
import { Kid } from 'src/shared/models/kid.entity';
import { Presence } from 'src/shared/models/presence.entity';

@Controller('presences')
export class PresencesController {
  constructor(
    private presencesService: PresencesService,
  ) { }

  @Get(':date')
  async getKidsWithPresencesByDate(@Param('date') date: string): Promise<Presence[]> {
    return await this.presencesService.getKidsWithPresencesByDate(date);
  }

}
