import { User } from './user.entity';
import { Repository, Connection } from 'typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { JoinTableDto } from 'src/dto/join-tables.dto';
export declare class UserService {
    private readonly userRepo;
    private connection;
    constructor(userRepo: Repository<User>, connection: Connection);
    joinner(dto: JoinTableDto): Promise<any>;
    create(userDto: CreateUserDto): Promise<User>;
    findMany(): Promise<User[]>;
    update(idUser: number, userDto: CreateUserDto): Promise<User>;
    delete(idUser: number): Promise<User>;
    existUser(nom: string, pass: string): Promise<boolean>;
    existUserLogin(nom: string, pass: string): Promise<User | {
        message: string;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
    }>;
    info(idUser: number): Promise<{
        error: string;
        user?: undefined;
    } | {
        user: User;
        error?: undefined;
    }>;
    infoEtu(): Promise<User[]>;
}
