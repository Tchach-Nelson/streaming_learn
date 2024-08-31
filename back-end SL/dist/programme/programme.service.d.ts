import { CreateProgrammeDto } from 'src/dto/create-programme.dto';
import { Programme } from './programme.entity';
import { Repository, Connection } from 'typeorm';
import { Programmematiere } from 'src/programmematiere/programmematiere.entity';
export declare class ProgrammeService {
    private readonly programmeRepo;
    private connection;
    private readonly programmematiereRepo;
    constructor(programmeRepo: Repository<Programme>, connection: Connection, programmematiereRepo: Repository<Programmematiere>);
    create(participationDto: CreateProgrammeDto): Promise<{
        error: string;
    }>;
    findMany(): Promise<Programme[]> | {
        error: string;
    };
    update(idProgramme: number, participationDto: CreateProgrammeDto): Promise<{
        error: string;
    }>;
    delete(idProgramme: number): Promise<{
        error: string;
    }>;
    info(idProgramme: number): Promise<Programme | {
        error: string;
    }>;
    programmeMatiere(idClasse: number): Promise<any[] | {
        error: string;
    }>;
    infoProgramme(): Promise<any>;
}
