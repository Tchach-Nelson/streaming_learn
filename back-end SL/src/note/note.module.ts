import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Matiere } from 'src/matiere/matiere.entity';
import { MatiereModule } from 'src/matiere/matiere.module';

@Module({
  imports: [TypeOrmModule.forFeature([Note]),MatiereModule], 
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
