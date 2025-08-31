import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { isUUID } from 'class-validator';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto)
      await this.userRepository.save(user)
      console.log("Creado")
      return user
    } catch (error) {
      throw new InternalServerErrorException(`Error:${error}`)
    }
  }

  async findAll() {
    const users: User[] = await this.userRepository.find()
    return users.map(({ password, ...data }) => data)
  }

  async findOne(term: string) {

    let user: User | null = null

    if (isUUID(term)) {
      user = await this.userRepository.findOneBy({ id: term })
    } else {
      user = await this.userRepository.findOneBy({ email: term })
    }

    if (!user) {
      throw new BadRequestException("Not Found")
    }
    const { password, ...data } = user
    return data
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const user = this.userRepository.preload({ id, ...updateUserDto })

    if (!user) {
      throw new BadRequestException('Not found')
    }

    try {
      await this.userRepository.update(id, updateUserDto)
      return this.findOne(id)
    } catch (error) {
      throw new BadRequestException('Bad request')
    }
  }

  async remove(id: string) {
    const user = await this.findOneComplete(id)
    await this.userRepository.remove(user)
    return
  }

  async findOneComplete(term: string) {
    let user: User | null = null
    if (isUUID(term)) {
      user = await this.userRepository.findOneBy({ id: term })
    } else {
      user = await this.userRepository.findOneBy({ email: term })
    }
    if (!user) {
      throw new BadRequestException('Not Found')
    }
    return user
  }

}
