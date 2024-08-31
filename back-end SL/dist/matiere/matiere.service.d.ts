import { Matiere } from './matiere.entity';
import { Repository } from 'typeorm';
import { CreateMatiereDto } from 'src/dto/create-matiere.dto';
export declare class MatiereService {
    private readonly matiereRepo;
    constructor(matiereRepo: Repository<Matiere>);
    create(matiereDto: CreateMatiereDto): Promise<Matiere | {
        error: string;
    }>;
    findMany(): Promise<Matiere[]> | {
        error: string;
    };
    update(idMatiere: number, matiereDto: CreateMatiereDto): Promise<Matiere | {
        error: string;
    }>;
    delete(idMatiere: number): Promise<Matiere | {
        error: string;
    }>;
    info(idMatiere: number): Promise<Matiere | {
        error: string;
    }>;
}
