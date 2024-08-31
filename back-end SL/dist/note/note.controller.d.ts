import { NoteService } from './note.service';
import { CreateNoteDto } from 'src/dto/create-note.dto';
import { Note } from './note.entity';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    create(dto: CreateNoteDto): Promise<Note>;
    find(): Promise<Note[]>;
    update(id: number, dto: CreateNoteDto): Promise<Note>;
    delete(id: number): Promise<Note>;
    info(id: number): Promise<{
        nom: string;
        credit: number;
        note: string;
        decision: string;
    }[]>;
    infoNote(): Promise<any>;
}
