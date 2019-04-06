import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { Settings } from 'src/shared/models/settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private readonly settingsService: Repository<Settings>,
  ) { }

  async findOne(): Promise<Settings> {
    return await this.settingsService.findOne();
  }

  async upsertSettings(settings: Settings): Promise<UpdateResult | Settings> {
    if (settings.id) {
      const oldsettings = await this.settingsService.findOne(settings.id);
      const updatedsettings = Object.assign(oldsettings, settings);
      return await this.settingsService.update(settings.id, updatedsettings);
    }
    return await this.settingsService.save(settings).catch(err => { throw Error(err); });
  }
}
