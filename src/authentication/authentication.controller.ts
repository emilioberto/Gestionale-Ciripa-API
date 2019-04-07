import { Controller, Body, Post } from '@nestjs/common';

import { AuthenticationService } from 'src/authentication/authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) { }

  @Post('token')
  async createToken(@Body() credentials: { username: string, password: string }): Promise<any> {
    return await this.authService.authenticate(credentials);
  }
}
