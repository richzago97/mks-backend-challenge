import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UserValidation } from './validations/createUser.validation';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() userData: UserValidation) {
    return this.userService.create(userData);
  }
}