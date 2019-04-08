import { Controller, Get, Param, Put, Body, Delete } from '@nestjs/common';

import { DeleteResult, UpdateResult } from 'typeorm';

import { Kid } from '../shared/models/kid.entity';
import { KidService } from '../shared/services/kid.service';

@Controller('kid')
export class KidController {

  constructor(
    private kidService: KidService,
  ) { }

  @Get('list')
  async getKidsList(): Promise<Kid[]> {
    return await this.kidService.findAll();
  }

  @Put()
  createKid(@Body() kid: Kid): Promise<UpdateResult | Kid> {
    return this.kidService.createKid(kid);
  }

  @Get(':id')
  getKid(@Param('id') id: string): Promise<Kid> {
    return this.kidService.findOne(id);
  }

  @Delete(':id')
  deleteKid(@Param('id') id: string): Promise<DeleteResult> {
    return this.kidService.deleteKid(id);
  }

  @Get('presences-summary/:kidId/:month/:year')
  async getPresencesSummary(@Param('kidId') kidId: number, @Param('month') month: number, @Param('year') year: number): Promise<Kid> {
    return this.kidService.presencesSummary(+kidId, +month, +year);
  }
}
