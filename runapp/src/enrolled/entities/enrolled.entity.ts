import { Career } from 'src/career/entities/career.entity'
import { User } from 'src/user/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Enrolled {

  @PrimaryGeneratedColumn('uuid')
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
    type: 'text',
    nullable: true
  })
  timeEnd: string

}
