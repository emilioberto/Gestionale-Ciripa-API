import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenticationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
    });
  }

  // async validate(payload: JwtPayload) {
  //   const user = await this.authService.validateUser(payload);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
}
