import { Module } from '@nestjs/common';
import { DisciplineetudiantController } from './disciplineetudiant.controller';
import { DisciplineetudiantService } from './disciplineetudiant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disciplineetudiant } from './disciplineetudiant.entity';
import { DisciplineModule } from 'src/discipline/discipline.module';

@Module({
  imports: [TypeOrmModule.forFeature([Disciplineetudiant]), DisciplineModule],
  controllers: [DisciplineetudiantController],
  providers: [DisciplineetudiantService]
})
export class DisciplineetudiantModule {}
