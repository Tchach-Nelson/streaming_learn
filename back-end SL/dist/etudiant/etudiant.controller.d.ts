/// <reference types="multer" />
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from 'src/dto/create-etudiant.dto';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    create(dto: CreateEtudiantDto): Promise<import("src/etudiant/etudiant.entity").Etudiant | {
        error: string;
    }>;
    uploadFile(id: number, file: Express.Multer.File): Promise<{
        error: string;
        message?: undefined;
        file?: undefined;
    } | {
        message: string;
        file: string;
        error?: undefined;
    }>;
    find(): Promise<import("src/etudiant/etudiant.entity").Etudiant[]>;
    update(id: number, dto: CreateEtudiantDto): Promise<string>;
    delete(id: number): Promise<string>;
    info(id: number): Promise<{
        error: string;
        etudiant?: undefined;
    } | {
        etudiant: import("src/etudiant/etudiant.entity").Etudiant;
        error?: undefined;
    }>;
    etuAllInfo(): Promise<any>;
}
