import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrolledService } from './enrolled.service';
import { CreateEnrolledDto } from './dto/create-enrolled.dto';
import { UpdateEnrolledDto } from './dto/update-enrolled.dto';

@Controller('enrolled')
export class EnrolledController {
  constructor(private readonly enrolledService: EnrolledService) { }

  @Post()
  userEnrolled(@Body() createEnrolledDto: CreateEnrolledDto) {
    return this.enrolledService.createEnrolled(createEnrolledDto);
  }

  @Get()
  findAll() {
    return this.enrolledService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrolledService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrolledDto: UpdateEnrolledDto) {
    return this.enrolledService.update(+id, updateEnrolledDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrolledService.remove(+id);
  }
}
