import { OperationService } from './operation.service';
import { CreateOperationDto } from 'src/dto/create-operation.dto';
export declare class OperationController {
    private readonly operationService;
    constructor(operationService: OperationService);
    create(dto: CreateOperationDto): Promise<{
        error: string;
    }>;
    find(): Promise<any>;
    update(id: number, dto: CreateOperationDto): Promise<{
        error: string;
    }>;
    delete(id: number): Promise<{
        error: string;
    }>;
    info(id: number): Promise<import("src/operation/operation.entity").Operation | {
        error: string;
    }>;
    infoScolarite(id: number): Promise<import("src/operation/operation.entity").Operation[] | {
        error: string;
    }>;
}
