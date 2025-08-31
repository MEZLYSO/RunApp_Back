import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDataAuthDto } from './dto/loginData-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService
  ) { }

  async userLogin(LoginDataAuthDto: LoginDataAuthDto) {
    const { email: emailDto, password: passDto } = LoginDataAuthDto
    const user = await this.userService.findOneComplete(emailDto)

    if (user && user.password === passDto) {
      const { password, ...data } = user
      return data
    } else {
      throw new BadRequestException("Not Found or error in data")
    }
  }

  async userSignup(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    const userCreated = await this.userService.create(createUserDto)
    const { password, ...data } = userCreated
    return data
  }

}
