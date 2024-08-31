import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository, Connection } from 'typeorm';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { query } from 'express';
import { CreateAnnonceInfoDto } from 'src/dto/create-annonceInfo.dto';
import { User } from 'src/user/user.entity';
import { Classe } from 'src/classe/classe.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message) private readonly messageRepo: Repository<Message>,
        private connection: Connection,
        @InjectRepository(User) private readonly userRepo: Repository<User>,
         @InjectRepository(Classe) private readonly classeRepo: Repository<Classe>
    ){}

    async create(messageDto: CreateMessageDto){

        const message = this.messageRepo.create(messageDto);
        return await this.messageRepo.save(message) ;
    }

    findMany(){
        return this.messageRepo.find({where:{type:'message'}}); 
    }

    async update(idMessage: number, messageDto: CreateMessageDto){
        const message = await this.messageRepo.findOne({where: {idMessage}}) ;
        Object.assign(message, messageDto);
        return await this.messageRepo.save(message);
    }

    async delete(idMessage:number){
        const message = await this.messageRepo.findOne({where: {idMessage}}) ;
        return await this.messageRepo.remove(message);
    }

    async annonce(idClasse:number){

        const message = await this.messageRepo.find({
            where: [
                { idClasse: idClasse, type: 'annonce' },
                { idClasse: 0, type: 'annonce' }
            ], 
            order:{
                idMessage:'DESC'
            }
        });
        return message;
    }

    async annonceInfo(){ 

        try{

            const query = ` 
            SELECT m.idMessage, m.contenu, m.heure, m.date, u.nom , c.nomClasse as idClasse
            FROM message m
            INNER JOIN utilisateur u ON u.idUser = m.idUser
            INNER JOIN classe c ON c.idClasse = m.idClasse where m.type = 'annonce'; `;

            const infoAll = await this.connection.query(query);

            return infoAll;
        }catch(erreur){
            console.log(erreur);
            return { error: `erreur: ${erreur}` };
        }
    }

    async postAnnonceInfo(dto:CreateAnnonceInfoDto){

        try{

            const user:User = await this.userRepo.findOne({where: {nom: dto.nom, type: 'Admin'}});
            const classe:Classe = await this.classeRepo.findOne({where: {nomClasse: dto.idClasse}});

            // console.log(user)

            const messageDto: CreateMessageDto  = {
                'idMessage': dto.idMessage,
                'idCours': 0,
                'contenu': dto.contenu,
                'heure': dto.heure,
                'date': dto.date,
                'type': 'annonce',
                'idUser': user.idUser,
                'idClasse': classe.idClasse,
                'userNom': dto.nom
            };

            const message = this.messageRepo.create(messageDto);
            return await this.messageRepo.save(message) ;

            // return "message";

        }catch(erreur){
            console.log(erreur);
            return { error: `erreur: ${erreur}` };
        }
    }

    async updateAnnonceInfo(id:number ,dto:CreateAnnonceInfoDto){

        try{
            
            const user:User = await this.userRepo.findOne({where: {nom: dto.nom, type: 'Admin'}});
            const classe:Classe = await this.classeRepo.findOne({where: {nomClasse: dto.idClasse}});

            console.log(user) 

            const messageDto: CreateMessageDto  = { 
                'idMessage': dto.idMessage,
                'idCours': 0,
                'contenu': dto.contenu,
                'heure': dto.heure,
                'date': dto.date,
                'type': 'annonce',
                'idUser': user.idUser,
                'idClasse': classe.idClasse,
                'userNom': dto.nom
            };

            const messageInfo :Message = await this.messageRepo.findOne({where: {idMessage : id}}) ;
            Object.assign(messageInfo, messageDto);
            return await this.messageRepo.save(messageInfo);


           

        }catch(erreur){
            console.log(erreur);
            return { error: `erreur: ${erreur}` };
        }
    }
}
