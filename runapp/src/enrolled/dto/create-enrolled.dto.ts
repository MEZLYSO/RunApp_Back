import { Career } from "src/career/entities/career.entity"
import { User } from "src/user/entities/user.entity"

export class CreateEnrolledDto {

  id: string

  user: User

  career: Career

  rfid: string

  timeEnd: string

}
