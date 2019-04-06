import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

import { Kid } from 'src/shared/models/kid.entity';

@Injectable()
export class KidService {
  constructor(
    @InjectRepository(Kid)
    private readonly kidRepository: Repository<Kid>,
  ) { }

  async findAll(): Promise<Kid[]> {
    return await this.kidRepository.find();
  }

  async findOne(id: string): Promise<Kid> {
    return await this.kidRepository.findOne(id);
  }

  async createKid(kid: Kid): Promise<UpdateResult | Kid> {
    if (kid.id) {
      const oldKid = await this.kidRepository.findOne(kid.id);
      const updatedKid = Object.assign(oldKid, kid);
      return await this.kidRepository.update(kid.id, updatedKid);
    }
    return await this.kidRepository.save(kid).catch(err => { throw Error(err); });

  }

  async deleteKid(kidId: string): Promise<DeleteResult> {
    return await this.kidRepository.delete(kidId);
  }
}
