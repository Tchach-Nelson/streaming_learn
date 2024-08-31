import { MatiereService } from './matiere.service';
import { CreateMatiereDto } from 'src/dto/create-matiere.dto';
export declare class MatiereController {
    private readonly matiereService;
    constructor(matiereService: MatiereService);
    create(dto: CreateMatiereDto): Promise<import("src/matiere/matiere.entity").Matiere | {
        error: string;
    }>;
    find(): Promise<import("src/matiere/matiere.entity").Matiere[]> | {
        error: string;
    };
    update(id: number, dto: CreateMatiereDto): Promise<import("src/matiere/matiere.entity").Matiere | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/matiere/matiere.entity").Matiere | {
        error: string;
    }>;
    info(id: number): Promise<import("src/matiere/matiere.entity").Matiere | {
        error: string;
    }>;
}
