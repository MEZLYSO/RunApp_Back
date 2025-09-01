import { IsNumber, IsOptional, IsPositive, IsString, IsUUID, MinLength } from "class-validator"

export class CreateEnrolledDto {

  @IsString()
  @IsUUID()
  userId: string

  @IsString()
  @IsUUID()
  careerId: string

  @IsString()
  @MinLength(12)
  rfid: string

  @IsNumber()
  @IsPositive()
  @IsOptional()
  timeStart?: number

}
