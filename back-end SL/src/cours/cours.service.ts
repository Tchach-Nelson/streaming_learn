import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cours } from './cours.entity';
import { Repository, Connection } from 'typeorm';
import { CreateCoursDto } from 'src/dto/create-cours.dto';
import { Participation } from 'src/participation/participation.entity';
import { Programme } from 'src/programme/programme.entity';
import { Matiere } from 'src/matiere/matiere.entity';
import { Programmematiere } from 'src/programmematiere/programmematiere.entity';
import { retry } from 'rxjs';

@Injectable()
export class CoursService {
    constructor(
        @InjectRepository(Cours) private readonly coursRepo: Repository<Cours>,
        @InjectRepository(Participation) private readonly participationRepo: Repository<Participation>,
        private connection: Connection,
        @InjectRepository(Programme) private readonly profRepo: Repository<Programme>,
        @InjectRepository(Programmematiere) private readonly matiereRepo: Repository<Programmematiere>,
    ){}

    async create(coursDto: CreateCoursDto){
        try {
            const cours = this.coursRepo.create(coursDto);
            return await this.coursRepo.save(cours) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async findMany(){
        try {

            // SELECT c.idCours , m.nom , c.date, c.uuid, c.duree, u.nom, cl.nomClasse        
            // FROM cours c
            // INNER JOIN matiere m ON c.idMatiere = m.idMatiere
            // INNER JOIN professeur p ON p.idProf = c.idProf
            // INNER JOIN utilisateur u ON u.idUser = p.idUser
            // INNER JOIN classe cl ON cl.idClasse = c.idClasse
            // ;

            const query = ` 
            SELECT c.idCours , m.nom as idMatiere , c.date, c.uuid, c.duree, u.nom as idProf  , cl.nomClasse as idClasse       
            FROM cours c
            INNER JOIN matiere m ON c.idMatiere = m.idMatiere
            INNER JOIN professeur p ON p.idProf = c.idProf
            INNER JOIN utilisateur u ON u.idUser = p.idUser
            INNER JOIN classe cl ON cl.idClasse = c.idClasse ; `;    

            const infoAll = await this.connection.query(query);

            return infoAll;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idCours: number, coursDto: CreateCoursDto){
        try {
            const cours = await this.coursRepo.findOne({where: {idCours}}) ;
            Object.assign(cours, coursDto);
            return await this.coursRepo.save(cours);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idCours:number){
        try {
            const cours = await this.coursRepo.findOne({where: {idCours}}) ;
            return await this.coursRepo.remove(cours);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async infoClasse(idClasse:number){
        try {
            const cours = await this.coursRepo.find({  
                where: [
                    { idClasse: idClasse},
                    { idClasse: 0}
                ], 
                order:{
                    idCours:'DESC'
                }
            }) ;
            return cours;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async presence(idUser:number,idClasse:number){
        try {
            const nbreCoursTotal = await this.coursRepo.count({ where: { idClasse }});
            const nbreCoursFait = await this.participationRepo.findAndCount({where: {idUser}}) ;
            console.log(nbreCoursFait[1]) ;
            let valeur = ( nbreCoursFait[1] / nbreCoursTotal) * 100 ;

            console.log(valeur)

            if(Number.isNaN(valeur)){
                valeur = 0 ;
            }

            const presence = {
                'presence': valeur,
                'absence': 100-valeur
            }
            
            return presence;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async participation(idUser:number,idClasse:number){
        try {
            const cours = await this.coursRepo.find({ 
                where: { idClasse },
                order: { idCours: 'DESC' }, 
                take: 6
            });


            const participation = await Promise.all( cours.map(async (cour)=>{
                try{
                    
                    const valeur:Participation[] =  await this.participationRepo.find({where: [
                        {idUser: idUser , idCours: cour.idCours}
                    ]}) ;
    
                    return valeur[0].valeur ;
                }catch(error){
                    return 0;
                }
            }))

          
            
            return  participation.reverse();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }


    async startCours(idNom: string) {
        // Obtenir la date actuelle
        const currentDate = new Date();
        const Actudate = currentDate.toISOString().split('T')[0]; // format YYYY-MM-DD

        console.log(Actudate);

        // Obtenir le jour actuel
        const currentDay = currentDate.getDay(); // 0 (Dimanche) à 6 (Samedi)
        
        console.log(idNom);

        // Vérifier s'il y a un cours de ce prof à cette date
        const prog = await this.profRepo.findOne({ where: { idNomProf: idNom, date: Actudate } });
        
        if (!prog) {
            return "Non programmé";
        }
        
        const matiere = await this.matiereRepo.findOne({ where: { idProgramme: prog.idProgramme } });

        console.log(matiere);

        // Extraire l'idProf depuis idNom en se basant sur le caractère '-'
        const idProf = Number(idNom.split('-')[0]);

        const existingCours = await this.coursRepo.findOne({ where: { date: Actudate, idMatiere: matiere.idMatiere, idClasse: prog.idClasse } });

        if (existingCours) {
            return `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`;
        }

        // Construire l'objet DTO pour le cours
        const dto: Cours = {
            'idCours': null,
            'idProf': idProf, // récupérer ce qui est avant le -
            'idMatiere': matiere.idMatiere,
            'date': Actudate, // récupérer la date actuelle
            'uuid': `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`,
            'idClasse': prog.idClasse,
            'duree': 0 // sera ajouté à la fin du cours
        };
        
        // Créer et sauvegarder le cours aa
        const cours = this.coursRepo.create(dto);
        await this.coursRepo.save(cours);
        
        return `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`;
    }

    async connectCours(idClasse:number){
        const currentDate = new Date();
        const Actudate = currentDate.toISOString().split('T')[0]; // format YYYY-MM-DD

        console.log(Actudate);

        // Obtenir le jour actuel
        const currentDay = currentDate.getDay(); // 0 (Dimanche) à 6 (Samedi)
        
        console.log(idClasse);

        // Vérifier s'il y a un cours de ce prof à cette date
        const prog = await this.profRepo.findOne({ where: { idClasse: idClasse, date: Actudate } });
        
        if (!prog) {
            return "Non programmé";
        }

        return `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`;

    }

}
