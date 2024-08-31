import { Classe } from './classe.entity';
import { Repository } from 'typeorm';
import { CreateClasseDto } from 'src/dto/Create-classe.dto';
export declare class ClasseService {
    private readonly classeRepo;
    constructor(classeRepo: Repository<Classe>);
    create(classeDto: CreateClasseDto): Promise<Classe | {
        error: string;
    }>;
    findMany(): Promise<Classe[]> | {
        error: string;
    };
    update(idClasse: number, classeDto: CreateClasseDto): Promise<Classe | {
        error: string;
    }>;
    delete(idClasse: number): Promise<Classe | {
        error: string;
    }>;
    info(idClasse: number): Promise<Classe | {
        error: string;
    }>;
}
