/// <reference types="multer" />
import { Etudiant } from './etudiant.entity';
import { Connection, Repository } from 'typeorm';
import { CreateEtudiantDto } from 'src/dto/create-etudiant.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Classe } from 'src/classe/classe.entity';
import { Scolarite } from 'src/scolarite/scolarite.entity';
export declare class EtudiantService {
    private readonly etudiantRepo;
    private readonly userRepo;
    private readonly classeRepo;
    private readonly scolariteRepo;
    private readonly userService;
    private connection;
    constructor(etudiantRepo: Repository<Etudiant>, userRepo: Repository<User>, classeRepo: Repository<Classe>, scolariteRepo: Repository<Scolarite>, userService: UserService, connection: Connection);
    create(etudiantDto: CreateEtudiantDto): Promise<Etudiant | {
        error: string;
    }>;
    findMany(): Promise<Etudiant[]>;
    update(matricule: number, etudiantDto: CreateEtudiantDto): Promise<string>;
    delete(matricule: number): Promise<string>;
    uploadFile(matricule: number, file: Express.Multer.File): Promise<{
        error: string;
        message?: undefined;
        file?: undefined;
    } | {
        message: string;
        file: string;
        error?: undefined;
    }>;
    info(idUser: number): Promise<{
        error: string;
        etudiant?: undefined;
    } | {
        etudiant: Etudiant;
        error?: undefined;
    }>;
    etuAllInfo(): Promise<any>;
}
