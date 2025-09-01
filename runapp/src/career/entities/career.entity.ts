import { Enrolled } from 'src/enrolled/entities/enrolled.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Career {

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
  description: string

  @Column({
    type: 'text',
    nullable: false
  })
  date: string

  @Column({
    type: 'float',
    nullable: false
  })
  distance: number

  @Column({
    type: 'text',
    nullable: false
  })
  place: string

  @OneToMany(
    () => Enrolled,
    (enrolled) => enrolled.career,
    { eager: true }
  )
  enrolled: Enrolled[]
}
