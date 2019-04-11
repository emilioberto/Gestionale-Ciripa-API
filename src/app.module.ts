import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KidModule } from './kid/kid.module';
import { SettingsModule } from './settings/settings.module';
import { PresencesModule } from './presences/presences.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { Utils } from './shared/utils/utils';

const appDataPath = Utils.getAppDataPath();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${appDataPath}/ciripa.db`,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    KidModule,
    SettingsModule,
    PresencesModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
