import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm';

import { Kid } from 'src/shared/models/kid.entity';

@Entity()
export class Presence {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => Kid, kid => kid.presencesList, { onDelete: 'CASCADE' })
  kid: Kid;
  @Column()
  date: Date;
  @Column({ nullable: true })
  morningEntry: Date;
  @Column({ nullable: true })
  morningExit: Date;
  @Column({ nullable: true })
  eveningEntry: Date;
  @Column({ nullable: true })
  eveningExit: Date;
}
