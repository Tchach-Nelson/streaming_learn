import { Module } from '@nestjs/common';
import { MatiereController } from './matiere.controller';
import { MatiereService } from './matiere.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matiere } from './matiere.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matiere])],
  controllers: [MatiereController],
  providers: [MatiereService],
  exports:[TypeOrmModule, MatiereService]
})
export class MatiereModule {}
