import { Injectable } from '@nestjs/common';
import { CreateEnrolledDto } from './dto/create-enrolled.dto';
import { UpdateEnrolledDto } from './dto/update-enrolled.dto';

@Injectable()
export class EnrolledService {
  create(createEnrolledDto: CreateEnrolledDto) {
    return 'This action adds a new enrolled';
  }

  findAll() {
    return `This action returns all enrolled`;
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
