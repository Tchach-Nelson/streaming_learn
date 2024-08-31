import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from './user.entity';
import { LoginDto } from 'src/dto/login.dto';
import { JoinTableDto } from 'src/dto/join-tables.dto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    joinner(dto: JoinTableDto): Promise<any>;
    create(dto: CreateUserDto): Promise<User>;
    find(): Promise<User[]>;
    update(id: number, dto: CreateUserDto): Promise<User>;
    delete(id: number): Promise<User>;
    Login(user: LoginDto): Promise<User | {
        message: string;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
    }>;
    info(id: number): Promise<{
        error: string;
        user?: undefined;
    } | {
        user: User;
        error?: undefined;
    }>;
    getFile(filename: string, res: Response): void;
    infoEtu(): Promise<User[]>;
}
