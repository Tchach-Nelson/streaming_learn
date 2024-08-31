import { Module } from '@nestjs/common';
import { ProgrammematiereController } from './programmematiere.controller';
import { ProgrammematiereService } from './programmematiere.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programmematiere } from './programmematiere.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Programmematiere])],
  controllers: [ProgrammematiereController],
  providers: [ProgrammematiereService],
  exports: [TypeOrmModule]
})
export class ProgrammematiereModule {}
