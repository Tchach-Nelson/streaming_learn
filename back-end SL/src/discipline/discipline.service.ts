import { Injectable } from '@nestjs/common';
import { Discipline } from './discipline.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDisciplineDto } from 'src/dto/create-discipline.dto';

@Injectable()
export class DisciplineService {
    constructor(@InjectRepository(Discipline) private readonly displineRepo: Repository<Discipline>){}

    async create(displineDto: CreateDisciplineDto){
        try {
            const displine = this.displineRepo.create(displineDto);
            return await this.displineRepo.save(displine) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.displineRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idDiscipline: number, displineDto: CreateDisciplineDto){
        try {
            const displine = await this.displineRepo.findOne({where: {idDiscipline}}) ;
            Object.assign(displine, displineDto);
            return await this.displineRepo.save(displine);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idDiscipline:number){
        try {
            const displine = await this.displineRepo.findOne({where: {idDiscipline}}) ;
            return await this.displineRepo.remove(displine);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idDiscipline:number){
        try {
            const displine = await this.displineRepo.findOne({where: {idDiscipline}}) ;
            return displine;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }


}
