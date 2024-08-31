import { Module } from '@nestjs/common';
import { ProgrammeController } from './programme.controller';
import { ProgrammeService } from './programme.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programme } from './programme.entity';
import { ProgrammematiereModule } from 'src/programmematiere/programmematiere.module';

@Module({
  imports: [TypeOrmModule.forFeature([Programme]), ProgrammematiereModule],
  controllers: [ProgrammeController],
  providers: [ProgrammeService],
  exports:[TypeOrmModule]
})
export class ProgrammeModule {}
