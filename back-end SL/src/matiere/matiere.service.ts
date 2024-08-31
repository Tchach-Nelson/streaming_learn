import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matiere } from './matiere.entity';
import { Repository } from 'typeorm';
import { CreateMatiereDto } from 'src/dto/create-matiere.dto';

@Injectable()
export class MatiereService {
     constructor(@InjectRepository(Matiere) private readonly matiereRepo: Repository<Matiere>){}


    async create(matiereDto: CreateMatiereDto){
        try {
            const matiere = this.matiereRepo.create(matiereDto);
            return await this.matiereRepo.save(matiere) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.matiereRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idMatiere: number, matiereDto: CreateMatiereDto){
        try {
            const matiere = await this.matiereRepo.findOne({where: {idMatiere}}) ;
            Object.assign(matiere, matiereDto);
            return await this.matiereRepo.save(matiere);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idMatiere:number){
        try {
            const matiere = await this.matiereRepo.findOne({where: {idMatiere}}) ;
            return await this.matiereRepo.remove(matiere);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idMatiere:number){
        try {
            const matiere = await this.matiereRepo.findOne({where: {idMatiere}}) ;
            return matiere;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }
}
