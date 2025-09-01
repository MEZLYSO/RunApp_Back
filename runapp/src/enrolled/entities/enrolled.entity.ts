import { Career } from 'src/career/entities/career.entity'
import { User } from 'src/user/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Enrolled {

  @PrimaryGeneratedColumn()
  id: string

  @ManyToOne(
    () => User,
    (user) => user.enrolled)
  user: User

  @ManyToOne(
    () => Career,
    (career) => career.enrolled)
  career: Career

  @Column({
    type: 'text'
  })
  rfid: string

  @Column({
    type: 'float',
    nullable: true
  })
  timeStart: number

}
