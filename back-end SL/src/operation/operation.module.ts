import { Module } from '@nestjs/common';
import { OperationController } from './operation.controller';
import { OperationService } from './operation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './operation.entity';
import { ScolariteModule } from 'src/scolarite/scolarite.module';

@Module({
  imports: [TypeOrmModule.forFeature([Operation]), ScolariteModule],
  controllers: [OperationController],
  providers: [OperationService]
})
export class OperationModule {}
