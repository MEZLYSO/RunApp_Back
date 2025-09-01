import { Module } from '@nestjs/common';
import { EnrolledService } from './enrolled.service';
import { EnrolledController } from './enrolled.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrolled } from './entities/enrolled.entity';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { Career } from 'src/career/entities/career.entity';
import { CareerModule } from 'src/career/career.module';

@Module({
  controllers: [EnrolledController],
  providers: [EnrolledService],
  imports: [
    TypeOrmModule.forFeature([User, Enrolled, Career]),
    CareerModule,
    UserModule
  ],
  exports: [TypeOrmModule]
})
export class EnrolledModule { }
