import { Module } from '@nestjs/common';
import { ClasseController } from './classe.controller';
import { ClasseService } from './classe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classe } from './classe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classe])],
  controllers: [ClasseController],
  providers: [ClasseService],
  exports: [TypeOrmModule]
})
export class ClasseModule {}
