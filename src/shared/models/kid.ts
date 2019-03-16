import { IBaseEntity } from 'src/shared/models/base-entity';

export class Kid implements IBaseEntity {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
}
