import { Module } from '@nestjs/common';
import { ScolariteController } from './scolarite.controller';
import { ScolariteService } from './scolarite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scolarite } from './scolarite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scolarite])],
  controllers: [ScolariteController],
  providers: [ScolariteService],
  exports:[TypeOrmModule]
})
export class ScolariteModule {}
