import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, createQueryBuilder } from 'typeorm';

import * as bcrypt from 'bcryptjs';
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

    // Create admin account if not existing
    let admin = await createQueryBuilder(User, 'user')
      .where('user.username = :username', { username: 'admin' })
      .getOne() as User;

    if (!admin) {
      Logger.log('No user found, creating new admin user');
      const hash = bcrypt.hashSync('admin', this.saltRounds);
      admin = {
        username: 'admin',
        password: hash,
      } as User;

      await this.userRepository.save(admin);
    } else {
      Logger.log(`Admin user found:`);
      Logger.log(admin);
    }

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
