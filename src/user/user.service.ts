import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from './entities/user.entity';
import { UserValidation } from './validations/createUser.validation';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private usersRepository: Repository<UserModel>,
  ) {}

  async validateUser(userData: UserValidation): Promise<UserModel> {
    const user = await this.usersRepository.findOne({ where: { username: userData.username } });

    if (!user || !(await bcrypt.compare(userData.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async create(userData: UserValidation): Promise<UserModel> {
    const existingUser = await this.usersRepository.findOne({ where: { username: userData.username } });

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = new UserModel();
    user.username = userData.username;
    user.email = userData.email;
    user.password = hashedPassword; 

    const savedUser = await this.usersRepository.save(user)

    const {password, ...userWithoutPassword} = savedUser


    return userWithoutPassword
  }

  findByUsername(username: string): Promise<UserModel> {
    return this.usersRepository.findOne({ where: { username } });
  }

  findByEmail(email: string): Promise<UserModel> {
    return this.usersRepository.findOne({ where: { email } });
  }

}