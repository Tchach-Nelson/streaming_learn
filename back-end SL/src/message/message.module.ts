import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { UserModule } from 'src/user/user.module';
import { ClasseModule } from 'src/classe/classe.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UserModule, ClasseModule],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
