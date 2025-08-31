import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDataAuthDto } from './dto/loginData-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  userLogin(@Body() loginDataUser: LoginDataAuthDto) {
    return this.authService.userLogin(loginDataUser)
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.userSignup(createUserDto)
  }

}
