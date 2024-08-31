import { ProgrammematiereService } from './programmematiere.service';
import { CreateProgrammematiereDto } from 'src/dto/create-programmematiere.dto';
export declare class ProgrammematiereController {
    private readonly programmematiereService;
    constructor(programmematiereService: ProgrammematiereService);
    create(dto: CreateProgrammematiereDto): Promise<import("src/programmematiere/programmematiere.entity").Programmematiere | {
        error: string;
    }>;
    find(): Promise<import("src/programmematiere/programmematiere.entity").Programmematiere[]> | {
        error: string;
    };
    update(id: number, dto: CreateProgrammematiereDto): Promise<import("src/programmematiere/programmematiere.entity").Programmematiere | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/programmematiere/programmematiere.entity").Programmematiere | {
        error: string;
    }>;
    info(id: number): Promise<import("src/programmematiere/programmematiere.entity").Programmematiere | {
        error: string;
    }>;
}
