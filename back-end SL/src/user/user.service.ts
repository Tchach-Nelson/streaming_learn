import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, Connection } from 'typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { JoinTableDto } from 'src/dto/join-tables.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,private connection: Connection){}

    async joinner(dto: JoinTableDto){
        // console.log(dto) ;     
        const query = ` 
        SELECT *
        FROM ${dto.table1} t1
        INNER JOIN ${dto.table2} t2 ON t1.${dto.cle1} = t2.${dto.cle2} AND t1.${dto.cle1} = ${dto.valeur}; `;
        try{
            const result = await this.connection.query(query);
            return result;
        }catch(error){
            console.log(error)
            return { error: `Erreur ${error}` };
        }
    }

    async create(userDto: CreateUserDto){

        const user = this.userRepo.create(userDto);
        return await this.userRepo.save(user) ;
    }

    findMany(){
        return this.userRepo.find();
    }

    async update(idUser: number, userDto: CreateUserDto){
        const user = await this.userRepo.findOne({where: {idUser}}) ;
        Object.assign(user, userDto);
        return await this.userRepo.save(user);
    }

    async delete(idUser:number){
        const user = await this.userRepo.findOne({where: {idUser}}) ;
        return await this.userRepo.remove(user);
    }

    async existUser(nom: string, pass: string): Promise<boolean> {
        const user = await this.userRepo.findOne({ where: { nom, pass } });
        return !!user; // retourne true si l'utilisateur existe, sinon false
    }

    async existUserLogin(nom: string, pass: string) {
        try{
            const user = await this.userRepo.findOne({
                where: {
                    nom: nom,
                    pass: pass
                }
            });
            
            if(!user)  return( {"message" : `Cette utilisateur n'existe pas`} )
            return user; 
        }
        catch(error){
            return( {"error" : `erreur ${error}`} )
        }
    }

    async info(idUser: number) {
    try {
        const user = await this.userRepo.findOne({ where: { idUser } }); 
        if (!user) {
            return { error: 'Utilisateur non trouvé' };
        }

        return {user };
    } catch (error) {
        console.log(error)
        return { error: `Erreur lors de l'upload du fichier ${error}` };
    }
    }

    async infoEtu(){
        const etuInfo = await this.userRepo.find({where: {type: 'Etudiant'}});
        return etuInfo.slice(-6).reverse();
    }
}
