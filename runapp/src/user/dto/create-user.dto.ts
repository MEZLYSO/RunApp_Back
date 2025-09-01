import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'
import { Career } from 'src/career/entities/career.entity'

export class CreateUserDto {

  @IsString()
  @MinLength(2)
  name: string

  @IsString()
  @MinLength(2)
  surname1: string

  @IsString()
  @MinLength(2)
  surname2: string

  @IsEmail()
  @IsString()
  email: string

  @IsString()
  @MinLength(8)
  password: string

  @IsString({ each: true })
  @IsOptional()
  careers?: Career[]

}
