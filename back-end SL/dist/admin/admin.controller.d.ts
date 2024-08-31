import { AdminService } from 'src/admin/admin.service';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(dto: CreateAdminDto): Promise<import("src/admin/admin.entity").Admin | {
        error: string;
    }>;
    find(): Promise<import("src/admin/admin.entity").Admin[]> | {
        error: string;
    };
    update(id: number, dto: CreateAdminDto): Promise<import("src/admin/admin.entity").Admin | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/admin/admin.entity").Admin | {
        error: string;
    }>;
    info(id: number): Promise<import("src/admin/admin.entity").Admin | {
        error: string;
    }>;
}
