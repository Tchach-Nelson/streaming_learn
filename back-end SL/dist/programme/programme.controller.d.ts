import { CreateProgrammeDto } from 'src/dto/create-programme.dto';
import { ProgrammeService } from './programme.service';
export declare class ProgrammeController {
    private readonly programmeService;
    constructor(programmeService: ProgrammeService);
    create(dto: CreateProgrammeDto): Promise<{
        error: string;
    }>;
    find(): Promise<import("src/programme/programme.entity").Programme[]> | {
        error: string;
    };
    update(id: number, dto: CreateProgrammeDto): Promise<{
        error: string;
    }>;
    delete(id: number): Promise<{
        error: string;
    }>;
    info(id: number): Promise<import("src/programme/programme.entity").Programme | {
        error: string;
    }>;
    programmeClasse(id: number): Promise<any[] | {
        error: string;
    }>;
    infoProgramme(): Promise<any>;
}
