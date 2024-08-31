import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Disciplineetudiant } from './disciplineetudiant.entity';
import { Connection, Repository } from 'typeorm';
import { CreateDisciplineetudiantDto } from 'src/dto/create-disciplineetudiant.dto';
import { Discipline } from 'src/discipline/discipline.entity';
import { CreateInfoDisciplineDto } from 'src/dto/create-infoDiscipline.dto';

@Injectable()
export class DisciplineetudiantService {
    constructor(
        @InjectRepository(Disciplineetudiant) private readonly disciplineetudiantRepo: Repository<Disciplineetudiant>,
        @InjectRepository(Discipline) private readonly displineRepo: Repository<Discipline>,
        private connection: Connection
    ){}

    async create(disciplineetudiantDto: CreateDisciplineetudiantDto){
        try {
            const admin = this.disciplineetudiantRepo.create(disciplineetudiantDto);
            return await this.disciplineetudiantRepo.save(admin) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.disciplineetudiantRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(iddisciplineetudiant: number, disciplineetudiantDto: CreateDisciplineetudiantDto){
        try {
            const admin = await this.disciplineetudiantRepo.findOne({where: {iddisciplineetudiant}}) ;
            Object.assign(admin, disciplineetudiantDto);
            return await this.disciplineetudiantRepo.save(admin);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(iddisciplineetudiant:number){
        try {
            const admin = await this.disciplineetudiantRepo.findOne({where: {iddisciplineetudiant}}) ;
            return await this.disciplineetudiantRepo.remove(admin);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(matricule:number){
        try {
            const displines = await this.disciplineetudiantRepo.find({where: {matricule}}) ;
            const nomDisplines =  await Promise.all( displines.map( async  (displines) =>{
                // console.log(displines);
                const idDiscipline = displines.idDiscipline ;
                const nomDispline = await  this.displineRepo.find({where: {idDiscipline}}) ;
                return nomDispline[0].valeur ;

            }
            ));
            return nomDisplines;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async infoDispline(){
        try {

            const query = ` 
            SELECT de.iddisciplineetudiant , de.idUser as idUser , u.nom as matricule , d.valeur as idDiscipline , de.motif  
            FROM disciplineetudiant de 
            INNER JOIN discipline d on d.idDiscipline = de.idDiscipline
            INNER JOIN utilisateur u on u.idUser = de.idUser ; `;    

            const infoAll = await this.connection.query(query);

            return infoAll;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async postInfoDispline(dto: CreateInfoDisciplineDto){
        try {

           

            return "infoAll";
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }
}
