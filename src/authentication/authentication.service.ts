import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, createQueryBuilder } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { User } from '../shared/models/user.entity';
import { JwtPayload } from '../shared/interfaces/jwt-payload';

@Injectable()
export class AuthenticationService {

  private saltRounds = 10;
  private myPlaintextPassword = 'C!rypà';

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  // async createUser() {

  //   bcrypt.hash(credentials.password, this.saltRounds, async (err, hash) => {
  //     const user = {
  //       username: credentials.username,
  //       password: hash,
  //     } as User;

  //     await this.userRepository.save(user);
  //   });
  // }

  async authenticate(credentials: { username: string, password: string }): Promise<any> {
    const user = await createQueryBuilder(User, 'user')
      .where('user.username = :username', { username: credentials.username })
      .getOne() as User;

    if (!user) {
      throw new UnauthorizedException();
    }

    const isValidPassword = bcrypt.compareSync(credentials.password, user.password);
    if (isValidPassword) {
      const jwtPayload: JwtPayload = { username: credentials.username };
      const token = this.jwtService.sign(jwtPayload);
      return { accessToken: token };
    } else {
      throw new UnauthorizedException();
    }
  }
}
