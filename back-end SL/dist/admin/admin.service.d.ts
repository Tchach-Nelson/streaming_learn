import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
export declare class AdminService {
    private readonly adminRepo;
    constructor(adminRepo: Repository<Admin>);
    create(adminDto: CreateAdminDto): Promise<Admin | {
        error: string;
    }>;
    findMany(): Promise<Admin[]> | {
        error: string;
    };
    update(idAmin: number, adminDto: CreateAdminDto): Promise<Admin | {
        error: string;
    }>;
    delete(idAmin: number): Promise<Admin | {
        error: string;
    }>;
    info(idAmin: number): Promise<Admin | {
        error: string;
    }>;
}
