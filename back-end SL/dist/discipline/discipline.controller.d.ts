import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from 'src/dto/create-discipline.dto';
export declare class DisciplineController {
    private readonly displineService;
    constructor(displineService: DisciplineService);
    create(dto: CreateDisciplineDto): Promise<import("src/discipline/discipline.entity").Discipline | {
        error: string;
    }>;
    find(): Promise<import("src/discipline/discipline.entity").Discipline[]> | {
        error: string;
    };
    update(id: number, dto: CreateDisciplineDto): Promise<import("src/discipline/discipline.entity").Discipline | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/discipline/discipline.entity").Discipline | {
        error: string;
    }>;
    info(id: number): Promise<import("src/discipline/discipline.entity").Discipline | {
        error: string;
    }>;
}
