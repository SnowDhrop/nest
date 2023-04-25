import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/interfaces/user.interface';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  }

  async signIn(pseudo, pass) {
    const user = await this.usersService.findOne(pseudo);
    
    if (user && await this.comparePasswords(pass, user.password)) {
        const payload = { username: user.pseudo, sub: user._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
      } else {
              throw new UnauthorizedException();

      }

    
  }
}