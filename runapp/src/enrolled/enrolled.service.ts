import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateEnrolledDto } from './dto/create-enrolled.dto';
import { UpdateEnrolledDto } from './dto/update-enrolled.dto';
import { UserService } from 'src/user/user.service';
import { CareerService } from 'src/career/career.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrolled } from './entities/enrolled.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnrolledService {

  constructor(
    @InjectRepository(Enrolled)
    private readonly enrolledRepository: Repository<Enrolled>,
    private readonly userService: UserService,
    private readonly careerService: CareerService
  ) { }

  async createEnrolled(createEnrolledDto: CreateEnrolledDto) {
    const { careerId, userId } = createEnrolledDto
    const user = await this.userService.findOneComplete(userId)
    const career = await this.careerService.findOne(careerId)

    if (!user || !career) {
      throw new BadRequestException('Not found')
    }
    const enrolledExist = await this.enrolledRepository.findOneBy({ user, career })
    if (enrolledExist) {
      throw new ConflictException('Exist')
    }
    const enrolledSucess = this.enrolledRepository.create({
      user,
      career,
      rfid: createEnrolledDto.rfid
    })

    return await this.enrolledRepository.save(enrolledSucess)
  }

  async findAll() {
    // Definicion temporal
    const usersEnrolled = await this.enrolledRepository.find({
      relations: ['user', 'career']
    })

    return usersEnrolled.map(({ user, ...data }) => {

      const { password, ...dataUser } = user

      return { user: dataUser, ...data }

    })
  }

  findOne(id: number) {
    return `This action returns a #${id} enrolled`;
  }

  update(id: number, updateEnrolledDto: UpdateEnrolledDto) {
    return `This action updates a #${id} enrolled`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrolled`;
  }
}
