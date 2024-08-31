import { ProfService } from './prof.service';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
import { CreateAllProfDto } from 'src/dto/create-allProf.dto';
export declare class ProfController {
    private readonly profService;
    constructor(profService: ProfService);
    create(dto: CreateAdminDto): Promise<import("src/prof/prof.entity").Prof>;
    find(): Promise<import("src/prof/prof.entity").Prof[]>;
    update(id: number, dto: CreateAdminDto): Promise<import("src/prof/prof.entity").Prof>;
    delete(id: number): Promise<import("src/prof/prof.entity").Prof>;
    allInfo(): Promise<any[] | {
        error: string;
    }>;
    postAllInfo(dto: CreateAllProfDto): Promise<import("src/prof/prof.entity").Prof | {
        error: string;
    }>;
    deleteAllInfo(id: number): Promise<import("src/user/user.entity").User | {
        erreur: string;
    }>;
    updateAllInfo(id: number, dto: CreateAllProfDto): Promise<({
        idUser: number;
        nom: any;
        pass: string;
        date: any;
        email: any;
        sexe: any;
        type: string;
        telephone: any;
        'status ': number;
    } & import("src/user/user.entity").User) | {
        erreur: string;
    }>;
}
