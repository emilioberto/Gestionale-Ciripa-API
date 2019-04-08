import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingsController } from './settings.controller';
import { SettingsService } from '../shared/services/settings.service';
import { Settings } from '../shared/models/settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Settings])],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule { }
