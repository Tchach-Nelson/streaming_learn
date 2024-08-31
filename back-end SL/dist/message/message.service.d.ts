import { Message } from './message.entity';
import { Repository, Connection } from 'typeorm';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { CreateAnnonceInfoDto } from 'src/dto/create-annonceInfo.dto';
import { User } from 'src/user/user.entity';
import { Classe } from 'src/classe/classe.entity';
export declare class MessageService {
    private readonly messageRepo;
    private connection;
    private readonly userRepo;
    private readonly classeRepo;
    constructor(messageRepo: Repository<Message>, connection: Connection, userRepo: Repository<User>, classeRepo: Repository<Classe>);
    create(messageDto: CreateMessageDto): Promise<Message>;
    findMany(): Promise<Message[]>;
    update(idMessage: number, messageDto: CreateMessageDto): Promise<Message>;
    delete(idMessage: number): Promise<Message>;
    annonce(idClasse: number): Promise<Message[]>;
    annonceInfo(): Promise<any>;
    postAnnonceInfo(dto: CreateAnnonceInfoDto): Promise<Message | {
        error: string;
    }>;
    updateAnnonceInfo(id: number, dto: CreateAnnonceInfoDto): Promise<Message | {
        error: string;
    }>;
}
