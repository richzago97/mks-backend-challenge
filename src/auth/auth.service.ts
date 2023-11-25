import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

import { UserPayload } from './interfaces/userPayload';
import { UserModel } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './interfaces/userToken';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
        ) {}

    login(user: UserModel): UserToken {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            username: user.username
        }
        const jwtToken = this.jwtService.sign(payload)

        return {
            access_token: jwtToken,
        }
    }
    
 async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email)

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (isPasswordValid) {
            return {
                ...user,
                password: undefined,
            }
        }
    }
    throw new Error('Email address or password provided is incorrect.')
 }
}
