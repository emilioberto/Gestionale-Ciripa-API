import { Controller, Get, Put, Body } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { SettingsService } from '../shared/services/settings.service';
import { Settings } from '../shared/models/settings.entity';

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
