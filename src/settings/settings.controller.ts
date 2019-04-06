import { Controller, Get, Put, Body } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { Settings } from 'src/shared/models/settings.entity';
import { SettingsService } from 'src/shared/services/settings.service';

@Controller('settings')
export class SettingsController {

  constructor(
    private settingsService: SettingsService,
  ) { }

  @Get()
  async getSettings(): Promise<Settings> {
    return await this.settingsService.findOne();
  }

  @Put()
  upsertSettings(@Body() settings: Settings): Promise<UpdateResult | Settings> {
    return this.settingsService.upsertSettings(settings);
  }

}
