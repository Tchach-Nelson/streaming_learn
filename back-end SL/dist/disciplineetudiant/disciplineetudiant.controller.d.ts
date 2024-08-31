import { DisciplineetudiantService } from './disciplineetudiant.service';
import { CreateDisciplineetudiantDto } from 'src/dto/create-disciplineetudiant.dto';
import { CreateInfoDisciplineDto } from 'src/dto/create-infoDiscipline.dto';
export declare class DisciplineetudiantController {
    private readonly disciplineetudiantService;
    constructor(disciplineetudiantService: DisciplineetudiantService);
    create(dto: CreateDisciplineetudiantDto): Promise<import("src/disciplineetudiant/disciplineetudiant.entity").Disciplineetudiant | {
        error: string;
    }>;
    find(): Promise<import("src/disciplineetudiant/disciplineetudiant.entity").Disciplineetudiant[]> | {
        error: string;
    };
    update(id: number, dto: CreateDisciplineetudiantDto): Promise<import("src/disciplineetudiant/disciplineetudiant.entity").Disciplineetudiant | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/disciplineetudiant/disciplineetudiant.entity").Disciplineetudiant | {
        error: string;
    }>;
    info(id: number): Promise<string[] | {
        error: string;
    }>;
    infoDispline(): Promise<any>;
    postInfoDispline(dto: CreateInfoDisciplineDto): Promise<"infoAll" | {
        error: string;
    }>;
}
