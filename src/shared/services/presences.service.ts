import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';

import { Kid } from 'src/shared/models/kid.entity';
import { Presence } from 'src/shared/models/presence.entity';

@Injectable()
export class PresencesService {
  constructor(
    @InjectRepository(Kid)
    private readonly kidRepository: Repository<Kid>,
    @InjectRepository(Presence)
    private readonly presenceRepository: Repository<Presence>,
  ) { }

  async getKidsWithPresencesByDate(date: string): Promise<Presence[]> {
    const attendanceDate = new Date(date);

    const kidsWithPresences = await this.presenceRepository.find({ relations: ['kid'] });
    // const test = await this.kidRepository.find({ relations: ['presencesList'], where: { date: attendanceDate } });

    return kidsWithPresences;
  }

}
