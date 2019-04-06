import { Column, PrimaryGeneratedColumn, ManyToOne, Entity, CreateDateColumn } from 'typeorm';

import { Kid } from 'src/shared/models/kid.entity';

@Entity()
export class Presence {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => Kid, kid => kid.presencesList, { onDelete: 'CASCADE' })
  kid: Kid;
  @Column({ type: 'date', nullable: true })
  date: Date;
  @Column({ type: 'date', nullable: true })
  morningEntry: Date;
  @Column({ type: 'date', nullable: true })
  morningExit: Date;
  @Column({ type: 'date', nullable: true })
  eveningEntry: Date;
  @Column({ type: 'date', nullable: true })
  eveningExit: Date;
}
