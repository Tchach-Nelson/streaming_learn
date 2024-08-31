import { Module } from '@nestjs/common';
import { ParticipationController } from './participation.controller';
import { ParticipationService } from './participation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participation } from './participation.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Participation,ParticipationService])],
  controllers: [ParticipationController],
  providers: [ParticipationService],
  exports: [TypeOrmModule,ParticipationService],
})
export class ParticipationModule {}
