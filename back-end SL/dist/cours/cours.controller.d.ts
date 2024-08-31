import { CoursService } from './cours.service';
import { CreateCoursDto } from 'src/dto/create-cours.dto';
export declare class CoursController {
    private readonly coursService;
    constructor(coursService: CoursService);
    create(dto: CreateCoursDto): Promise<import("src/cours/cours.entity").Cours | {
        error: string;
    }>;
    find(): Promise<any>;
    update(id: number, dto: CreateCoursDto): Promise<import("src/cours/cours.entity").Cours | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/cours/cours.entity").Cours | {
        error: string;
    }>;
    infoClasse(id: number): Promise<import("src/cours/cours.entity").Cours[] | {
        error: string;
    }>;
    presence(id: number, idClasse: number): Promise<{
        presence: number;
        absence: number;
    } | {
        error: string;
    }>;
    participation(id: number, idClasse: number): Promise<number[] | {
        error: string;
    }>;
    startCours(idNom: string): Promise<string>;
    connectCours(idClasse: number): Promise<string>;
}
