import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';

import { DeleteResult, UpdateResult } from 'typeorm';

import { KidService } from 'src/shared/services/kid.service';
import { Kid } from 'src/shared/models/kid.entity';

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

}
