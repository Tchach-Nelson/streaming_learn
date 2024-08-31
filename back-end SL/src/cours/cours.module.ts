import { Module } from '@nestjs/common';
import { CoursController } from './cours.controller';
import { CoursService } from './cours.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cours } from './cours.entity';
import { ParticipationModule } from 'src/participation/participation.module';
import { Programme } from 'src/programme/programme.entity';
import { ProgrammeModule } from 'src/programme/programme.module';
import { MatiereModule } from 'src/matiere/matiere.module';
import { ProgrammematiereModule } from 'src/programmematiere/programmematiere.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cours]),ParticipationModule,ProgrammeModule,ProgrammematiereModule],
  controllers: [CoursController],
  providers: [CoursService]
})
export class CoursModule {}
