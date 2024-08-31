import { Discipline } from './discipline.entity';
import { Repository } from 'typeorm';
import { CreateDisciplineDto } from 'src/dto/create-discipline.dto';
export declare class DisciplineService {
    private readonly displineRepo;
    constructor(displineRepo: Repository<Discipline>);
    create(displineDto: CreateDisciplineDto): Promise<Discipline | {
        error: string;
    }>;
    findMany(): Promise<Discipline[]> | {
        error: string;
    };
    update(idDiscipline: number, displineDto: CreateDisciplineDto): Promise<Discipline | {
        error: string;
    }>;
    delete(idDiscipline: number): Promise<Discipline | {
        error: string;
    }>;
    info(idDiscipline: number): Promise<Discipline | {
        error: string;
    }>;
}
