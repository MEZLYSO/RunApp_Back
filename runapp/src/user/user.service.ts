import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

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
      return user
    } catch (error) {
      throw new InternalServerErrorException(`Error:${error}`)
    }
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: string) {
    return this.userRepository.findBy({ id })
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
    const user = await this.findOne(id)
    await this.userRepository.remove(user)
    return
  }
}
