import { Module } from '@nestjs/common';
import { Prof } from './prof.entity';
import { ProfController } from './prof.controller';
import { ProfService } from './prof.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Prof]), UserModule],
  controllers: [ProfController],
  providers: [ProfService]
})
export class ProfModule {}
