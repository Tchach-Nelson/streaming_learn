import { Scolarite } from './scolarite.entity';
import { Repository } from 'typeorm';
import { CreateScolariteDto } from 'src/dto/create-scolarite.dto';
export declare class ScolariteService {
    private readonly scolariteRepo;
    constructor(scolariteRepo: Repository<Scolarite>);
    create(scolariteDto: CreateScolariteDto): Promise<Scolarite | {
        error: string;
    }>;
    findMany(): Promise<Scolarite[]> | {
        error: string;
    };
    update(idScolarite: number, scolariteDto: CreateScolariteDto): Promise<Scolarite | {
        error: string;
    }>;
    delete(idScolarite: number): Promise<Scolarite | {
        error: string;
    }>;
    info(idScolarite: number): Promise<Scolarite | {
        error: string;
    }>;
}
