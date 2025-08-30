import { IsNumber, IsPositive, IsString, MinLength } from "class-validator"

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

}
