import { IsEmail, IsString, MinLength } from "class-validator"

export class LoginDataAuthDto {

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @MinLength(8)
  password: string

}
