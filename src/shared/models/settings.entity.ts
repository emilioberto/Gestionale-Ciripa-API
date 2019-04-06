import { Column, ObjectIdColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  hourCost: number;
}
