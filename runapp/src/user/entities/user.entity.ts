import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: number

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

}
