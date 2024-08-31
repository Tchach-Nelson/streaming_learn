import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from "./user/user.entity";
import { AdminModule } from './admin/admin.module';
import { Admin } from "./admin/admin.entity";
import { ProfModule } from './prof/prof.module';
import { Prof } from './prof/prof.entity';
import { EtudiantModule } from './etudiant/etudiant.module'
import { Etudiant } from './etudiant/etudiant.entity';
import { MessageModule } from './message/message.module';
import { Message } from './message/message.entity'; 
import { ClasseModule } from './classe/classe.module';
import { Classe } from './classe/classe.entity';
import { CoursModule } from './cours/cours.module';
import { Cours } from './cours/cours.entity';
import { DisciplineModule } from './discipline/discipline.module';
import { Discipline } from './discipline/discipline.entity';
import { DisciplineetudiantModule } from './disciplineetudiant/disciplineetudiant.module';
import { Disciplineetudiant } from './disciplineetudiant/disciplineetudiant.entity';
import { MatiereModule } from './matiere/matiere.module';
import { Matiere } from './matiere/matiere.entity';
import { OperationModule } from './operation/operation.module';
import { Operation } from './operation/operation.entity';
import { ParticipationModule } from './participation/participation.module';
import { Participation } from './participation/participation.entity';
import { ProgrammeModule } from './programme/programme.module';
import { ProgrammematiereModule } from './programmematiere/programmematiere.module';
import { Programmematiere } from './programmematiere/programmematiere.entity';
import { ScolariteModule } from './scolarite/scolarite.module';
import { Scolarite } from './scolarite/scolarite.entity';
import { Programme } from './programme/programme.entity';
import { NoteModule } from './note/note.module';
import { Note } from './note/note.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'streaminglearn',
      entities: [User,Admin,Prof,Etudiant,Message,Classe,Cours,Discipline,Disciplineetudiant,Matiere,Operation,Participation,Programme,Programmematiere,Scolarite,Note],
      synchronize: false 
    }),
    UserModule,
    AdminModule,
    ProfModule,
    EtudiantModule,
    MessageModule,
    ClasseModule,
    CoursModule,
    DisciplineModule,
    DisciplineetudiantModule,
    MatiereModule,
    OperationModule,
    ParticipationModule,
    ProgrammeModule,
    ProgrammematiereModule,
    ScolariteModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
