import { PartialType } from '@nestjs/mapped-types';
import { CreateEnrolledDto } from './create-enrolled.dto';

export class UpdateEnrolledDto extends PartialType(CreateEnrolledDto) {}
