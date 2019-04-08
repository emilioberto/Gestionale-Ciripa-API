import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder, UpdateResult } from 'typeorm';

import { Presence } from '../models/presence.entity';
import { Kid } from '../models/kid.entity';

@Injectable()
export class PresencesService {
  constructor(
    @InjectRepository(Presence)
    private readonly presenceRepository: Repository<Presence>,
  ) { }

  async upsertPresences(presences: Presence[]): Promise<UpdateResult | Presence[]> {
    return await this.presenceRepository.save(presences).catch(err => { throw Error(err); });
  }

  async getKidsWithPresencesByDate(date: string): Promise<Presence[]> {
    const kids = await createQueryBuilder(Kid, 'kid')
      .leftJoinAndSelect('kid.presencesList', 'presence', 'presence.date = :date', { date })
      // .where('kid.contractType = :contractType', { contractType: ContractType.Hours }) // TODO: Decide if needed or not
      .getMany() as Kid[];

    const presences = kids.map(kid => {
      if (kid.presencesList && kid.presencesList.length) {
        return {
          id: kid.presencesList[0].id,
          date: new Date(kid.presencesList[0].date),
          morningEntry: kid.presencesList[0].morningEntry,
          morningExit: kid.presencesList[0].morningExit,
          eveningEntry: kid.presencesList[0].eveningEntry,
          eveningExit: kid.presencesList[0].eveningExit,
          kidId: kid.id,
          kid,
        } as Presence;
      } else {
        return {
          id: 0,
          date: new Date(date),
          eveningEntry: null,
          eveningExit: null,
          morningEntry: null,
          morningExit: null,
          kidId: kid.id,
          kid,
        } as Presence;
      }
    }) as Presence[];

    return presences;
  }
}
