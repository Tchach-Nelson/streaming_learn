import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProgrammeDto } from 'src/dto/create-programme.dto';
import { Programme } from './programme.entity';
import { Repository, Connection } from 'typeorm';
import { Programmematiere } from 'src/programmematiere/programmematiere.entity';

@Injectable()
export class ProgrammeService {
    constructor(
        @InjectRepository(Programme) private readonly programmeRepo: Repository<Programme>,
        private connection: Connection,
        @InjectRepository(Programmematiere) private readonly programmematiereRepo: Repository<Programmematiere>,
         
    ){}

    async create(participationDto: CreateProgrammeDto){
        try {
            const participation = this.programmeRepo.create(participationDto);
            await this.programmeRepo.save(participation) ; 

            if(participationDto.idMatiere){
                const programmematiere = this.programmematiereRepo.create(
                    {
                        'idMatiere': participationDto.idMatiere,
                        'idProgramme': participation.idProgramme
                    }
                )
                await this.programmematiereRepo.save(programmematiere) ;

            }

        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.programmeRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idProgramme: number, participationDto: CreateProgrammeDto){
        try {
            const participation = await this.programmeRepo.findOne({where: {idProgramme}}) ;
            Object.assign(participation, participationDto);
            await this.programmeRepo.save(participation);

            const programmeMatiere = await this.programmematiereRepo.findOne({where: {idProgramme, idMatiere: participationDto.idMatiere}})
            await this.programmematiereRepo.remove(programmeMatiere);
            Object.assign(programmeMatiere, {
                        'idMatiere': participationDto.idMatiere,
                        'idProgramme': participation.idProgramme
            });
            await this.programmematiereRepo.save(programmeMatiere);

        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idProgramme:number){
        try {
            const participation = await this.programmeRepo.findOne({where: {idProgramme}}) ;
            await this.programmeRepo.remove(participation);

            const programmeMatiere = await this.programmematiereRepo.findOne({where: {idProgramme}}) ;
            await this.programmematiereRepo.remove(programmeMatiere);

        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idProgramme:number){
        try {
            const participation = await this.programmeRepo.findOne({where: {idProgramme}}) ;
            return participation;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    
    async programmeMatiere(idClasse:number){
        const query = ` 
        SELECT *       
        FROM programme p
        INNER JOIN programmematiere pm ON p.idProgramme = pm.idProgramme
        Inner JOIN matiere m on m.idMatiere = pm.idMatiere 
        WHERE p.idClasse = ${idClasse}  ; `;

        try{
            const result = await this.connection.query(query);

            const programme = await Promise.all(result.map(result => {
                return ({
                    'heure': result.heure,
                    'date': result.date,
                    'matiere': result.nom
                })
            }))
            return programme;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async infoProgramme(){
        try {
            const query = ` 
            SELECT p.idProgramme, c.nomClasse as idClasse, p.heure, p.date, m.nom as idMatiere, p.idNomProf
            FROM  programmematiere pm
            INNER JOIN programme p on p.idProgramme = pm.idProgramme
            INNER JOIN classe c on c.idClasse = p.idClasse
            INNER JOIN matiere m on m.idMatiere = pm.idMatiere 
            ORDER BY p.idProgramme; `;    

            const infoAll = await this.connection.query(query);

            return infoAll;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    //     SELECT *       
    // FROM programme p
    // INNER JOIN programmematiere pm ON p.idProgramme = pm.idProgramme
    // Inner JOIN matiere m on m.idMatiere = pm.idMatiere;


}
