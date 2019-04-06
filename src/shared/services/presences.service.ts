import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, createQueryBuilder } from 'typeorm';

import { Kid } from 'src/shared/models/kid.entity';
import { Presence } from 'src/shared/models/presence.entity';
import { ContractType } from 'src/shared/models/contract-type.entity';

@Injectable()
export class PresencesService {
  constructor(
    @InjectRepository(Kid)
    private readonly kidRepository: Repository<Kid>,
    @InjectRepository(Presence)
    private readonly presenceRepository: Repository<Presence>,
  ) { }

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
          kid,
        } as Presence;
      }
    }) as Presence[];

    return presences;

    // // Presenced
    // const presences = await createQueryBuilder(Presence, 'presence')
    //   .leftJoinAndSelect('presence.kid', 'kid')
    //   .where('presence.date = :date', { date })
    //   .getMany() as Presence[];

    // return presences;
  }

}
