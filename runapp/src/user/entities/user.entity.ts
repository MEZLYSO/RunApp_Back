import { Enrolled } from 'src/enrolled/entities/enrolled.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'text',
    nullable: false
  })
  name: string

  @Column({
    type: 'text',
    nullable: false
  })
  surname1: string

  @Column({
    type: 'text',
    nullable: true
  })
  surname2: string

  @Column({
    type: 'text',
    nullable: true
  })
  email: string

  @Column({
    type: 'text',
    nullable: true
  })
  password: string

  @OneToMany(
    () => Enrolled,
    (enrolled) => enrolled.user,
    { eager: true }
  )
  enrolled: Enrolled[]

}
