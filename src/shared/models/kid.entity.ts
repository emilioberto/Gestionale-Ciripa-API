import { Entity, Column, ObjectID, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { PaymentMethod } from './payment-method.entity';
import { ContractType } from './contract-type.entity';
import { Presence } from './presence.entity';

@Entity()
export class Kid {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  fiscalCode: string;
  @Column()
  birthDate: Date;
  @Column({ nullable: true })
  from: Date;
  @Column({ nullable: true })
  to: Date;
  @Column()
  contractType: ContractType;
  @Column({ nullable: true })
  contractValue: number;
  @Column()
  notes: string;
  @Column()
  parentFirstName: string;
  @Column()
  parentLastName: string;
  @Column()
  parentFiscalCode: string;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  cap: number;
  @Column()
  province: string;
  @Column()
  paymentMethod: PaymentMethod;
  @Column()
  subscription: number;
  @Column()
  subscriptionPaid: boolean;
  @OneToMany(type => Presence, presence => presence.kid)
  presencesList: Presence[];
}
