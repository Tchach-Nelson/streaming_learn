import { Programmematiere } from './programmematiere.entity';
import { Repository, Connection } from 'typeorm';
import { CreateProgrammematiereDto } from 'src/dto/create-programmematiere.dto';
export declare class ProgrammematiereService {
    private readonly programmematiere;
    private connection;
    constructor(programmematiere: Repository<Programmematiere>, connection: Connection);
    create(programmematiereDto: CreateProgrammematiereDto): Promise<Programmematiere | {
        error: string;
    }>;
    findMany(): Promise<Programmematiere[]> | {
        error: string;
    };
    update(idMatiere: number, programmematiereDto: CreateProgrammematiereDto): Promise<Programmematiere | {
        error: string;
    }>;
    delete(idMatiere: number): Promise<Programmematiere | {
        error: string;
    }>;
    info(idMatiere: number): Promise<Programmematiere | {
        error: string;
    }>;
}
