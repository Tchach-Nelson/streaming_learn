import { Module } from '@nestjs/common';
import { EtudiantController } from './etudiant.controller';
import { EtudiantService } from './etudiant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etudiant } from './etudiant.entity';
import { UserModule } from 'src/user/user.module';
import { ClasseModule } from 'src/classe/classe.module';
import { ScolariteModule } from 'src/scolarite/scolarite.module';

@Module({
   imports: [TypeOrmModule.forFeature([Etudiant]), UserModule, ClasseModule, ScolariteModule],
  controllers: [EtudiantController],
  providers: [EtudiantService]
})
export class EtudiantModule {}
 