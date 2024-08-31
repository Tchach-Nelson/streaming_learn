import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Connection, Repository } from 'typeorm';
import { CreateNoteDto } from 'src/dto/create-note.dto';
import { Matiere } from 'src/matiere/matiere.entity';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note) private readonly noteRepo: Repository<Note>,
        private connection: Connection,
        @InjectRepository(Matiere) private readonly matiereRepo: Repository<Matiere>,
    ){}

    async create(messageDto: CreateNoteDto){

        const message = this.noteRepo.create(messageDto);
        return await this.noteRepo.save(message) ;
    }

    findMany(){
        return this.noteRepo.find();
    }

    async update(idNote: number, messageDto: CreateNoteDto){
        const message = await this.noteRepo.findOne({where: {idNote}}) ;
        Object.assign(message, messageDto);
        return await this.noteRepo.save(message);
    }

    async delete(idNote:number){
        const message = await this.noteRepo.findOne({where: {idNote}}) ;
        return await this.noteRepo.remove(message);
    }

    async info(idUser:number){

        const notesUser:Note[] = await this.noteRepo.find({where: {idUser}});

        const noteInfos =  await Promise.all(notesUser.map( async noteUse =>{
            const matiere:Matiere = await this.matiereRepo.findOne({where:{idMatiere: noteUse.idMatiere}});
            console.log('a')
            return ({
                    'nom': matiere.nom,
                    'credit': matiere.credit,
                    'note': noteUse.note,
                    'decision': noteUse.decision
            })
        }))

        console.log(noteInfos);

        return noteInfos;
    }

    async infoNote(){
        try{
            const query = ` 
            SELECT n.idNote, u.nom as idUser, m.nom as idMatiere, n.note, n.date, n.semestre, n.decision        
            FROM noteetu n
            INNER JOIN utilisateur u ON u.idUser = n.idUser
            INNER JOIN matiere m ON m.idMatiere = n.idMatiere ; `;    

            const infoAll = await this.connection.query(query);

            return infoAll;

        }catch(error){
            console.log(error);
            return({erreur : `erreur : ${error}`})
        }

    }
}
