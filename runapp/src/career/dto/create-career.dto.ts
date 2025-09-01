import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"
import { User } from "src/user/entities/user.entity"

export class CreateCareerDto {

  @IsString()
  @MinLength(5)
  name: string

  @IsString()
  date: string

  @IsNumber()
  @IsPositive()
  distance: number

  @IsString()
  @MinLength(10)
  description: string


  @IsString()
  @MinLength(10)
  place: string

  @IsString({ each: true })
  @IsOptional()
  users?: User[]
}
