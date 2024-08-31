import { Cours } from './cours.entity';
import { Repository, Connection } from 'typeorm';
import { CreateCoursDto } from 'src/dto/create-cours.dto';
import { Participation } from 'src/participation/participation.entity';
import { Programme } from 'src/programme/programme.entity';
import { Programmematiere } from 'src/programmematiere/programmematiere.entity';
export declare class CoursService {
    private readonly coursRepo;
    private readonly participationRepo;
    private connection;
    private readonly profRepo;
    private readonly matiereRepo;
    constructor(coursRepo: Repository<Cours>, participationRepo: Repository<Participation>, connection: Connection, profRepo: Repository<Programme>, matiereRepo: Repository<Programmematiere>);
    create(coursDto: CreateCoursDto): Promise<Cours | {
        error: string;
    }>;
    findMany(): Promise<any>;
    update(idCours: number, coursDto: CreateCoursDto): Promise<Cours | {
        error: string;
    }>;
    delete(idCours: number): Promise<Cours | {
        error: string;
    }>;
    infoClasse(idClasse: number): Promise<Cours[] | {
        error: string;
    }>;
    presence(idUser: number, idClasse: number): Promise<{
        presence: number;
        absence: number;
    } | {
        error: string;
    }>;
    participation(idUser: number, idClasse: number): Promise<number[] | {
        error: string;
    }>;
    startCours(idNom: string): Promise<string>;
    connectCours(idClasse: number): Promise<string>;
}
