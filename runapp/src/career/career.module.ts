import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Career } from './entities/career.entity';

@Module({
  controllers: [CareerController],
  providers: [CareerService],
  imports: [
    TypeOrmModule.forFeature([Career])
  ],
  exports: [TypeOrmModule, CareerService]
})
export class CareerModule { }
