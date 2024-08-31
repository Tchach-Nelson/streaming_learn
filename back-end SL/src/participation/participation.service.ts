import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participation } from './participation.entity';
import { Repository } from 'typeorm';
import { CreateParticipationDto } from 'src/dto/create-participation.dto';

@Injectable()
export class ParticipationService {
    constructor(@InjectRepository(Participation) private readonly participationRepo: Repository<Participation>){}

    async create(participationDto: CreateParticipationDto){
        try {
            const participation = this.participationRepo.create(participationDto);
            return await this.participationRepo.save(participation) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.participationRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idUser: number, participationDto: CreateParticipationDto){
        try {
            const participation = await this.participationRepo.findOne({where: {idUser}}) ;
            Object.assign(participation, participationDto);
            return await this.participationRepo.save(participation);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idUser:number){
        try {
            const participation = await this.participationRepo.findOne({where: {idUser}}) ;
            return await this.participationRepo.remove(participation);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idUser:number){
        try {
            const participation = await this.participationRepo.findOne({where: {idUser}}) ;
            return participation;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async nbreCours(idUser:number){
        try {
            const participation = await this.participationRepo.findAndCount({where: {idUser}}) ;
            return participation;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }


}
