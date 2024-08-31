import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classe } from './classe.entity';
import { Repository } from 'typeorm';
import { CreateClasseDto } from 'src/dto/Create-classe.dto';

@Injectable()
export class ClasseService {

    constructor(@InjectRepository(Classe) private readonly classeRepo: Repository<Classe>){}

    async create(classeDto: CreateClasseDto){
        try {
            const classe = this.classeRepo.create(classeDto);
            return await this.classeRepo.save(classe) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.classeRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idClasse: number, classeDto: CreateClasseDto){
        try {
            const classe = await this.classeRepo.findOne({where: {idClasse}}) ;
            Object.assign(classe, classeDto);
            return await this.classeRepo.save(classe);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idClasse:number){
        try {
            const classe = await this.classeRepo.findOne({where: {idClasse}}) ;
            return await this.classeRepo.remove(classe);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idClasse:number){
        try {
            const classe = await this.classeRepo.findOne({where: {idClasse}}) ;
            return classe;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

}
