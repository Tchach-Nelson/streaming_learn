import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Etudiant } from './etudiant.entity';
import { Connection, Repository } from 'typeorm';
import { CreateEtudiantDto } from 'src/dto/create-etudiant.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { Classe } from 'src/classe/classe.entity';
import { Scolarite } from 'src/scolarite/scolarite.entity';

@Injectable()
export class EtudiantService {
    constructor(
        @InjectRepository(Etudiant) private readonly etudiantRepo: Repository<Etudiant>,
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        @InjectRepository(Classe) private readonly classeRepo: Repository<Classe>,
        @InjectRepository(Scolarite) private readonly scolariteRepo: Repository<Scolarite>,
        private readonly userService: UserService,
        private connection: Connection
    ) {}

    async create(etudiantDto: CreateEtudiantDto) {
        console.log(etudiantDto);

        try {
        const existUser = await this.userService.existUser(etudiantDto.nom, etudiantDto.pass);
        if (existUser) {
            return { error: 'cet utilisateur existe déjà' }; 
        }

        const userOnly: CreateUserDto = {
            idUser: etudiantDto.idUser,
            nom: etudiantDto.nom,
            pass: etudiantDto.pass,
            date: etudiantDto.date,
            email: etudiantDto.email,
            sexe: etudiantDto.sexe,
            type: etudiantDto.type,
            telephone: etudiantDto.telephone,
            status: etudiantDto.status,
        };

        const userResponse = await this.userService.create(userOnly);

        //classe
        let classe = await this.classeRepo.findOne({where:{nomClasse: `${etudiantDto.specialite} ${etudiantDto.niveau}`}})
        if(!classe){  classe.idClasse = -1 }

        console.log(classe)

        //scolarité
        const montant = etudiantDto.niveau == 1 ? 500000 : 600000 ; 
        const scolarite = await this.scolariteRepo.create({
            // 'idScolarite': 0,
            'semestre': '1',
            'montant': montant,
            'reste': montant,
            'bourse': 0,
            'dateInscription': '0000-00-00',
            'rabais': 0,
            'moratoire': 'non' 
        });
        await this.scolariteRepo.save(scolarite) ;

        const etuOnly = {
            matricule: etudiantDto.matricule,
            idUser: userResponse.idUser,
            idClasse: classe.idClasse, //mettre une vrai classe
            idScolarite: scolarite.idScolarite, //creer la scolarite
            lettreMotivation: `-lettreMotivation.pdf`, //etudiantDto.lettreMotivation 
            bourse: `-bourse.pdf`, //etudiantDto.bourse 
            specialite: etudiantDto.specialite,
            niveau: etudiantDto.niveau,
            diplomeNature: etudiantDto.diplomeNature,
            diplome:  `-diplome.pdf`, //etudiantDto.diplome 
            bulletin: `-bulletin.pdf`, //etudiantDto.bulletin 
            redoublant: etudiantDto.redoublant,
        };

        const etudiant = this.etudiantRepo.create(etuOnly);
        return await this.etudiantRepo.save(etudiant);
        } catch (error) {
        console.log(error);
        return { error: `Erreur lors de l'ajout de l'etudiant ${error}` };
        }
    }

    findMany() {
        return this.etudiantRepo.find();
    }

    async update(matricule: number, etudiantDto: CreateEtudiantDto) {
        try {
        const existUser = await this.userService.existUser(etudiantDto.nom, etudiantDto.pass);
        if (existUser) {
            return 'cet utilisateur existe déjà';
        }

        const etudiant = await this.etudiantRepo.findOne({ where: { matricule } });
        const etuOnly = {
            matricule: etudiantDto.matricule,
            idUser: etudiant.idUser,
            idClasse: etudiantDto.idClasse,
            idScolarite: etudiantDto.idScolarite,
            lettreMotivation: `${etudiantDto.matricule}-lettreMotivation.pdf`, //etudiantDto.lettreMotivation 
            bourse: `${etudiantDto.matricule}-bourse.pdf`, //etudiantDto.bourse 
            specialite: etudiantDto.specialite,
            niveau: etudiantDto.niveau,
            diplomeNature: etudiantDto.diplomeNature,
            diplome:  `${etudiantDto.matricule}-diplome.pdf`, //etudiantDto.diplome 
            bulletin: `${etudiantDto.matricule}-bulletin.pdf`, //etudiantDto.bulletin 
            redoublant: etudiantDto.redoublant,
        };
        Object.assign(etudiant, etuOnly);

        await this.etudiantRepo.save(etudiant);

        const userOnly: CreateUserDto = {
            idUser: etudiant.idUser,
            nom: etudiantDto.nom,
            pass: etudiantDto.pass,
            date: etudiantDto.date,
            email: etudiantDto.email,
            sexe: etudiantDto.sexe,
            type: etudiantDto.type,
            telephone: etudiantDto.telephone,
            status: etudiantDto.status,
        };    

        const userResponse = await this.userService.update(etudiant.idUser, userOnly);

        return 'Etudiant mis à jour';
        } catch (error) {
        return `Erreur lors de la mise à jour de l'etudiant ${error}`;
        }
    }

    async delete(matricule: number) {
        try {
        const etudiant = await this.etudiantRepo.findOne({ where: { matricule } });
        await this.etudiantRepo.remove(etudiant);

        await this.userService.delete(etudiant.idUser); 

        return 'Etudiant Supprimé';
        } catch (error) {
        return `Erreur lors de la mise à jour de l'etudiant ${error}`;
        }
    }

    async uploadFile(matricule: number, file: Express.Multer.File) {
        try {
            const etudiant = await this.etudiantRepo.findOne({ where: { matricule } }); 
            if (!etudiant) {
                return { error: 'Etudiant non trouvé' };
            }

            // Assuming the file field name matches the entity field name
            const fileType = file.fieldname;

            etudiant[fileType] = file.filename;

            await this.etudiantRepo.save(etudiant);


            return { message: 'File uploaded successfully', file: file.filename };
        } catch (error) {
            console.log(error)
            return { error: `Erreur lors de l'upload du fichier ${error}` };
        }
    }

    async info(idUser: number) {
        try {
            const etudiant = await this.etudiantRepo.findOne({ where: { idUser } }); 
            if (!etudiant) {
                return { error: 'Etudiant non trouvé' };
            }

            return {etudiant};
        } catch (error) {
            console.log(error)
            return { error: `Erreur lors de l'upload du fichier ${error}` };
        }
    }

    async etuAllInfo(){
        const query = ` 
        SELECT *       
        FROM etudiant e
        INNER JOIN utilisateur u ON u.idUser = e.idUser ; `;    

        const infoAll = await this.connection.query(query);
        return infoAll;
    }
}
