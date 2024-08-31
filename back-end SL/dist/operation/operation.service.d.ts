import { Operation } from './operation.entity';
import { Connection, Repository } from 'typeorm';
import { CreateOperationDto } from 'src/dto/create-operation.dto';
import { Scolarite } from 'src/scolarite/scolarite.entity';
export declare class OperationService {
    private readonly operationRepo;
    private readonly scolariteRepository;
    private connection;
    constructor(operationRepo: Repository<Operation>, scolariteRepository: Repository<Scolarite>, connection: Connection);
    create(operationDto: CreateOperationDto): Promise<{
        error: string;
    }>;
    findMany(): Promise<any>;
    update(idOp: number, operationDto: CreateOperationDto): Promise<{
        error: string;
    }>;
    delete(idOp: number): Promise<{
        error: string;
    }>;
    info(idOp: number): Promise<Operation | {
        error: string;
    }>;
    infoScolarite(idScolarite: number): Promise<Operation[] | {
        error: string;
    }>;
    resteCalcule(idScolarite: number): Promise<void>;
}
