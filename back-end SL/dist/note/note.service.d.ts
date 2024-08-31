import { Note } from './note.entity';
import { Connection, Repository } from 'typeorm';
import { CreateNoteDto } from 'src/dto/create-note.dto';
import { Matiere } from 'src/matiere/matiere.entity';
export declare class NoteService {
    private readonly noteRepo;
    private connection;
    private readonly matiereRepo;
    constructor(noteRepo: Repository<Note>, connection: Connection, matiereRepo: Repository<Matiere>);
    create(messageDto: CreateNoteDto): Promise<Note>;
    findMany(): Promise<Note[]>;
    update(idNote: number, messageDto: CreateNoteDto): Promise<Note>;
    delete(idNote: number): Promise<Note>;
    info(idUser: number): Promise<{
        nom: string;
        credit: number;
        note: string;
        decision: string;
    }[]>;
    infoNote(): Promise<any>;
}
