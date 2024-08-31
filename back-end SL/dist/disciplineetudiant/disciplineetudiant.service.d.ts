import { Disciplineetudiant } from './disciplineetudiant.entity';
import { Connection, Repository } from 'typeorm';
import { CreateDisciplineetudiantDto } from 'src/dto/create-disciplineetudiant.dto';
import { Discipline } from 'src/discipline/discipline.entity';
import { CreateInfoDisciplineDto } from 'src/dto/create-infoDiscipline.dto';
export declare class DisciplineetudiantService {
    private readonly disciplineetudiantRepo;
    private readonly displineRepo;
    private connection;
    constructor(disciplineetudiantRepo: Repository<Disciplineetudiant>, displineRepo: Repository<Discipline>, connection: Connection);
    create(disciplineetudiantDto: CreateDisciplineetudiantDto): Promise<Disciplineetudiant | {
        error: string;
    }>;
    findMany(): Promise<Disciplineetudiant[]> | {
        error: string;
    };
    update(iddisciplineetudiant: number, disciplineetudiantDto: CreateDisciplineetudiantDto): Promise<Disciplineetudiant | {
        error: string;
    }>;
    delete(iddisciplineetudiant: number): Promise<Disciplineetudiant | {
        error: string;
    }>;
    info(matricule: number): Promise<string[] | {
        error: string;
    }>;
    infoDispline(): Promise<any>;
    postInfoDispline(dto: CreateInfoDisciplineDto): Promise<"infoAll" | {
        error: string;
    }>;
}
