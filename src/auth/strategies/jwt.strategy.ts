import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserPayload } from '../interfaces/userPayload';
import { UserFromJWT } from '../interfaces/userFromJWT';
import "dotenv/config"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }



  async validate(payload: UserPayload): Promise<UserFromJWT> {
    return {
      id: payload.sub,
      email: payload.email,
      username: payload.username,
    };
  }
}