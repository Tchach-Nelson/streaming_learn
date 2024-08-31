import { ParticipationService } from './participation.service';
import { CreateParticipationDto } from 'src/dto/create-participation.dto';
export declare class ParticipationController {
    private readonly participationService;
    constructor(participationService: ParticipationService);
    create(dto: CreateParticipationDto): Promise<import("src/participation/participation.entity").Participation | {
        error: string;
    }>;
    find(): Promise<import("src/participation/participation.entity").Participation[]> | {
        error: string;
    };
    update(id: number, dto: CreateParticipationDto): Promise<import("src/participation/participation.entity").Participation | {
        error: string;
    }>;
    delete(id: number): Promise<import("src/participation/participation.entity").Participation | {
        error: string;
    }>;
    info(id: number): Promise<import("src/participation/participation.entity").Participation | {
        error: string;
    }>;
}
