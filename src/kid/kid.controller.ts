import { Controller, Get, Param } from '@nestjs/common';

@Controller('kid')
export class KidController {

  @Get('list')
  getKidsList(): string {
    return 'kids list';
  }

  @Get(':id')
  getKid(@Param('id') id: number): string {
    return `Kid ${id}`;
  }
}
