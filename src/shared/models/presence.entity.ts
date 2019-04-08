import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm';

import { Kid } from './kid.entity';

@Entity()
export class Presence {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => Kid, kid => kid.presencesList, { onDelete: 'CASCADE' })
  kid: Kid;
  kidId: number;
  @Column({ type: 'date', nullable: true })
  date: Date;
  @Column()
  month: number;
  @Column()
  year: number;
  @Column({ type: 'date', nullable: true })
  morningEntry: Date;
  @Column({ type: 'date', nullable: true })
  morningExit: Date;
  @Column({ type: 'date', nullable: true })
  eveningEntry: Date;
  @Column({ type: 'date', nullable: true })
  eveningExit: Date;
}
