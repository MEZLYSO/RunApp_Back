import { Module } from '@nestjs/common';
import { EnrolledService } from './enrolled.service';
import { EnrolledController } from './enrolled.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrolled } from './entities/enrolled.entity';
import { CareerModule } from 'src/career/career.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [EnrolledController],
  imports: [
    TypeOrmModule.forFeature([Enrolled]),
    CareerModule,
    UserModule
  ],
  providers: [EnrolledService],
})
export class EnrolledModule { }
