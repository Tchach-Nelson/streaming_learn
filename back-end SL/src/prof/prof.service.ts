import { Injectable } from '@nestjs/common';
import { Prof } from './prof.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
import { User } from 'src/user/user.entity';
import { CreateAllProfDto } from 'src/dto/create-allProf.dto';

@Injectable()
export class ProfService {
    constructor(
        @InjectRepository(Prof) private readonly profRepo: Repository<Prof>,
        private connection: Connection,
        @InjectRepository(User) private readonly userRepo: Repository<User>,
    ){}

    async create(profDto: CreateAdminDto){

        const prof = this.profRepo.create(profDto);
        return await this.profRepo.save(prof) ;
    }

    findMany(){
        return this.profRepo.find();
    }

    async update(idProf: number, profDto: CreateAdminDto){
        const prof = await this.profRepo.findOne({where: {idProf}}) ;
        Object.assign(prof, profDto);
        return await this.profRepo.save(prof);
    }

    async delete(idProf:number){
        const user = await this.profRepo.findOne({where: {idProf}}) ;
        return await this.profRepo.remove(user);
    }

    async profAllInfo(){
        const query = ` 
        SELECT * 
        FROM professeur p 
        INNER JOIN utilisateur u ON p.idUser = u.idUser; `;

        try{
            const infoAll = await this.connection.query(query);

            console.log(infoAll);

            const resultInfoAll = await Promise.all(infoAll.map((result:CreateAllProfDto) => {
                return ({
                    'idProf': result.idProf,
                    'nom': result.nom,
                    'date': result.date,
                    'email': result.email,
                    'sexe': result.sexe,
                    'specialite': result.specialite,
                    'telephone': result.telephone,
                    'poste': result.poste,
                    'salaire': result.salaire
                })
            }))
            return resultInfoAll;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async postprofAllInfo(dto){
 
        try{

            const user = {
                'idUser ': null,
                'nom': dto.nom,
                'pass': 'null',
                'date':dto.date,
                'email':dto.email,
                'sexe':dto.sexe,
                'type':'Prof',
                'telephone':dto.telephone,
                'status ': 1
            }

            const userInfo = await this.userRepo.save(user)
            
            const prof = {
                'idUser': userInfo.idUser, 
                'idProf': null,
                'specialite': dto.specialite,
                'poste': dto.poste,
                'salaire': dto.salaire
            }

            const result = this.profRepo.create(prof);
            return await this.profRepo.save(result) ;

           
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async deleteAllInfo(idProf:number){

        try{

            const prof = await this.profRepo.findOne({where: {idProf}}) ;
            await this.profRepo.remove(prof);
            console.log(prof);

    
            const user  = await this.userRepo.findOne({where: {idUser: prof.idUser}})
            return await this.userRepo.remove(user);   
        }catch(error){
            console.log(error);
            return({erreur : `erreur lors de la supression ${error} `})
        }


    }

    async updateAllInfo(idProf:number, dto){

        try{
            // const userInfo = await this.userRepo.save(user)
            
            
            const profD = await this.profRepo.findOne({where: {idProf}}) ;
            const prof = {
                'idUser': profD.idUser, 
                'idProf':  dto.idProf,
                'specialite': dto.specialite,
                'poste': dto.poste,
                'salaire': dto.salaire
            }
            Object.assign(profD, prof);
            await this.profRepo.save(prof);
            
            const userD = await this.profRepo.findOne({where: {idUser: profD.idUser}}) ;
            const user = {
               'idUser':profD.idUser,
               'nom': dto.nom,
               'pass': 'null',
               'date':dto.date,
               'email':dto.email,
               'sexe':dto.sexe,
               'type':'Prof',
               'telephone':dto.telephone,
               'status ': 1
           }
            // Object.assign(user, user);
            return await this.userRepo.save(user);



        }catch(error){
            console.log(error);
            return({erreur : `erreur lors de la supression ${error} `})
        }


    }

}
