import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Career } from './entities/career.entity';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';

@Injectable()
export class CareerService {

  constructor(
    @InjectRepository(Career)
    private readonly careerRepository: Repository<Career>
  ) { }

  async create(createCareerDto: CreateCareerDto) {
    try {
      const career = this.careerRepository.create(createCareerDto)
      await this.careerRepository.save(career)
      return career
    } catch (error) {
      throw new InternalServerErrorException(`Error:${error}`)
    }
  }

  findAll() {
    return this.careerRepository.find({})
  }

  async findOne(id: string) {

    let career: Career | null = null

    if (isUUID(id)) {
      career = await this.careerRepository.findOneBy({ id: id })
    }

    if (!career) {
      throw new BadRequestException("Not found")
    }

    return career
  }

  async update(id: string, updateCareerDto: UpdateCareerDto) {
    const career = await this.careerRepository.preload({ id, ...updateCareerDto })

    if (!career) {
      throw new BadRequestException("Not found")
    }

    try {
      await this.careerRepository.update(id, career)
      return this.findOne(id)
    } catch (error) {
      throw new BadRequestException('Bad request')
    }

  }

  async remove(id: string) {
    const career = await this.findOne(id)
    await this.careerRepository.remove(career)
    return
  }
}
