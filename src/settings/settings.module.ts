import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingsController } from 'src/settings/settings.controller';
import { Settings } from 'src/shared/models/settings.entity';
import { SettingsService } from 'src/shared/services/settings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Settings])],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule { }
