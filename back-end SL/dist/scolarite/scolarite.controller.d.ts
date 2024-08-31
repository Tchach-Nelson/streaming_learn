import { ScolariteService } from './scolarite.service';
import { CreateScolariteDto } from 'src/dto/create-scolarite.dto';
export declare class ScolariteController {
    private readonly scolariteService;
    constructor(scolariteService: ScolariteService);
    create(dto: CreateScolariteDto): Promise<import("src/scolarite/scolarite.entity").Scolarite | {
        error: string;
    }>;
    find(): Promise<import("src/scolarite/scolarite.entity").Scolarite[]> | {
        error: string;
    };
    update(id: number, dto: CreateScolariteDto): Promise<import("src/scolarite/scolarite.entity").Scolarite | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/scolarite/scolarite.entity").Scolarite | {
        error: string;
    }>;
    info(id: number): Promise<import("src/scolarite/scolarite.entity").Scolarite | {
        error: string;
    }>;
}
