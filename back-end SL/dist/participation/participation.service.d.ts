import { Participation } from './participation.entity';
import { Repository } from 'typeorm';
import { CreateParticipationDto } from 'src/dto/create-participation.dto';
export declare class ParticipationService {
    private readonly participationRepo;
    constructor(participationRepo: Repository<Participation>);
    create(participationDto: CreateParticipationDto): Promise<Participation | {
        error: string;
    }>;
    findMany(): Promise<Participation[]> | {
        error: string;
    };
    update(idUser: number, participationDto: CreateParticipationDto): Promise<Participation | {
        error: string;
    }>;
    delete(idUser: number): Promise<Participation | {
        error: string;
    }>;
    info(idUser: number): Promise<Participation | {
        error: string;
    }>;
    nbreCours(idUser: number): Promise<[Participation[], number] | {
        error: string;
    }>;
}
