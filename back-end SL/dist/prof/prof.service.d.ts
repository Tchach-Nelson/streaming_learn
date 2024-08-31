import { Prof } from './prof.entity';
import { Repository, Connection } from 'typeorm';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
import { User } from 'src/user/user.entity';
export declare class ProfService {
    private readonly profRepo;
    private connection;
    private readonly userRepo;
    constructor(profRepo: Repository<Prof>, connection: Connection, userRepo: Repository<User>);
    create(profDto: CreateAdminDto): Promise<Prof>;
    findMany(): Promise<Prof[]>;
    update(idProf: number, profDto: CreateAdminDto): Promise<Prof>;
    delete(idProf: number): Promise<Prof>;
    profAllInfo(): Promise<any[] | {
        error: string;
    }>;
    postprofAllInfo(dto: any): Promise<Prof | {
        error: string;
    }>;
    deleteAllInfo(idProf: number): Promise<User | {
        erreur: string;
    }>;
    updateAllInfo(idProf: number, dto: any): Promise<({
        idUser: number;
        nom: any;
        pass: string;
        date: any;
        email: any;
        sexe: any;
        type: string;
        telephone: any;
        'status ': number;
    } & User) | {
        erreur: string;
    }>;
}
