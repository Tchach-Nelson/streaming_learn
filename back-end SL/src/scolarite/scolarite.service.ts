import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Scolarite } from './scolarite.entity';
import { Repository } from 'typeorm';
import { CreateScolariteDto } from 'src/dto/create-scolarite.dto';

@Injectable()
export class ScolariteService {
    constructor(@InjectRepository(Scolarite) private readonly scolariteRepo: Repository<Scolarite>){}

     async create(scolariteDto: CreateScolariteDto){
        try {
            const scolarite = this.scolariteRepo.create(scolariteDto);
            return await this.scolariteRepo.save(scolarite) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.scolariteRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idScolarite: number, scolariteDto: CreateScolariteDto){
        try {
            const scolarite = await this.scolariteRepo.findOne({where: {idScolarite}}) ;
            Object.assign(scolarite, scolariteDto);
            return await this.scolariteRepo.save(scolarite);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idScolarite:number){
        try {
            const scolarite = await this.scolariteRepo.findOne({where: {idScolarite}}) ;
            return await this.scolariteRepo.remove(scolarite);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idScolarite:number){
        try {
            const scolarite = await this.scolariteRepo.findOne({where: {idScolarite}}) ;
            return scolarite;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }
}
