import { ClasseService } from './classe.service';
import { CreateClasseDto } from 'src/dto/Create-classe.dto';
export declare class ClasseController {
    private readonly classeService;
    constructor(classeService: ClasseService);
    create(dto: CreateClasseDto): Promise<import("src/classe/classe.entity").Classe | {
        error: string;
    }>;
    find(): Promise<import("src/classe/classe.entity").Classe[]> | {
        error: string;
    };
    update(id: number, dto: CreateClasseDto): Promise<import("src/classe/classe.entity").Classe | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/classe/classe.entity").Classe | {
        error: string;
    }>;
    info(id: number): Promise<import("src/classe/classe.entity").Classe | {
        error: string;
    }>;
}
