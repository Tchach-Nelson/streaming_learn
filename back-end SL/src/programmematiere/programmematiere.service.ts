import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Programmematiere } from './programmematiere.entity';
import { Repository, Connection } from 'typeorm';
import { CreateProgrammematiereDto } from 'src/dto/create-programmematiere.dto';

@Injectable()
export class ProgrammematiereService {
    constructor(
        @InjectRepository(Programmematiere) private readonly programmematiere: Repository<Programmematiere>,
         private connection: Connection,
         
    ){}

    async create(programmematiereDto: CreateProgrammematiereDto){
        try {
            const programmematiere = this.programmematiere.create(programmematiereDto);
            return await this.programmematiere.save(programmematiere) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.programmematiere.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idMatiere: number, programmematiereDto: CreateProgrammematiereDto){
        try {
            const programmematiere = await this.programmematiere.findOne({where: {idMatiere}}) ;
            Object.assign(programmematiere, programmematiereDto);
            return await this.programmematiere.save(programmematiere);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idMatiere:number){
        try {
            const programmematiere = await this.programmematiere.findOne({where: {idMatiere}}) ;
            return await this.programmematiere.remove(programmematiere);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idMatiere:number){
        try {
            const programmematiere = await this.programmematiere.findOne({where: {idMatiere}}) ;
            return programmematiere;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    

}
