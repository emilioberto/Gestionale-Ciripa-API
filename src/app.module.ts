import { Module } from '@nestjs/common';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { KidModule } from 'src/kid/kid.module';

@Module({
  imports: [KidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
