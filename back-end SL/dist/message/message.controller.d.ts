import { MessageService } from './message.service';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { Message } from './message.entity';
import { CreateAnnonceInfoDto } from 'src/dto/create-annonceInfo.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(dto: CreateMessageDto): Promise<Message>;
    find(): Promise<Message[]>;
    update(id: number, dto: CreateMessageDto): Promise<Message>;
    delete(id: number): Promise<Message>;
    annonce(idClasse: number): Promise<Message[]>;
    annonceInfo(): Promise<any>;
    postAnnonceInfo(dto: CreateAnnonceInfoDto): Promise<Message | {
        error: string;
    }>;
    deleteAnnonceInfo(id: number): Promise<Message>;
    updateAnnonceInfo(id: number, dto: CreateAnnonceInfoDto): Promise<Message | {
        error: string;
    }>;
}
