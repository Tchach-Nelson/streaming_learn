"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const etudiant_entity_1 = require("./etudiant.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const classe_entity_1 = require("../classe/classe.entity");
const scolarite_entity_1 = require("../scolarite/scolarite.entity");
let EtudiantService = class EtudiantService {
    constructor(etudiantRepo, userRepo, classeRepo, scolariteRepo, userService, connection) {
        this.etudiantRepo = etudiantRepo;
        this.userRepo = userRepo;
        this.classeRepo = classeRepo;
        this.scolariteRepo = scolariteRepo;
        this.userService = userService;
        this.connection = connection;
    }
    async create(etudiantDto) {
        console.log(etudiantDto);
        try {
            const existUser = await this.userService.existUser(etudiantDto.nom, etudiantDto.pass);
            if (existUser) {
                return { error: 'cet utilisateur existe déjà' };
            }
            const userOnly = {
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
            let classe = await this.classeRepo.findOne({ where: { nomClasse: `${etudiantDto.specialite} ${etudiantDto.niveau}` } });
            if (!classe) {
                classe.idClasse = -1;
            }
            console.log(classe);
            const montant = etudiantDto.niveau == 1 ? 500000 : 600000;
            const scolarite = await this.scolariteRepo.create({
                'semestre': '1',
                'montant': montant,
                'reste': montant,
                'bourse': 0,
                'dateInscription': '0000-00-00',
                'rabais': 0,
                'moratoire': 'non'
            });
            await this.scolariteRepo.save(scolarite);
            const etuOnly = {
                matricule: etudiantDto.matricule,
                idUser: userResponse.idUser,
                idClasse: classe.idClasse,
                idScolarite: scolarite.idScolarite,
                lettreMotivation: `-lettreMotivation.pdf`,
                bourse: `-bourse.pdf`,
                specialite: etudiantDto.specialite,
                niveau: etudiantDto.niveau,
                diplomeNature: etudiantDto.diplomeNature,
                diplome: `-diplome.pdf`,
                bulletin: `-bulletin.pdf`,
                redoublant: etudiantDto.redoublant,
            };
            const etudiant = this.etudiantRepo.create(etuOnly);
            return await this.etudiantRepo.save(etudiant);
        }
        catch (error) {
            console.log(error);
            return { error: `Erreur lors de l'ajout de l'etudiant ${error}` };
        }
    }
    findMany() {
        return this.etudiantRepo.find();
    }
    async update(matricule, etudiantDto) {
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
                lettreMotivation: `${etudiantDto.matricule}-lettreMotivation.pdf`,
                bourse: `${etudiantDto.matricule}-bourse.pdf`,
                specialite: etudiantDto.specialite,
                niveau: etudiantDto.niveau,
                diplomeNature: etudiantDto.diplomeNature,
                diplome: `${etudiantDto.matricule}-diplome.pdf`,
                bulletin: `${etudiantDto.matricule}-bulletin.pdf`,
                redoublant: etudiantDto.redoublant,
            };
            Object.assign(etudiant, etuOnly);
            await this.etudiantRepo.save(etudiant);
            const userOnly = {
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
        }
        catch (error) {
            return `Erreur lors de la mise à jour de l'etudiant ${error}`;
        }
    }
    async delete(matricule) {
        try {
            const etudiant = await this.etudiantRepo.findOne({ where: { matricule } });
            await this.etudiantRepo.remove(etudiant);
            await this.userService.delete(etudiant.idUser);
            return 'Etudiant Supprimé';
        }
        catch (error) {
            return `Erreur lors de la mise à jour de l'etudiant ${error}`;
        }
    }
    async uploadFile(matricule, file) {
        try {
            const etudiant = await this.etudiantRepo.findOne({ where: { matricule } });
            if (!etudiant) {
                return { error: 'Etudiant non trouvé' };
            }
            const fileType = file.fieldname;
            etudiant[fileType] = file.filename;
            await this.etudiantRepo.save(etudiant);
            return { message: 'File uploaded successfully', file: file.filename };
        }
        catch (error) {
            console.log(error);
            return { error: `Erreur lors de l'upload du fichier ${error}` };
        }
    }
    async info(idUser) {
        try {
            const etudiant = await this.etudiantRepo.findOne({ where: { idUser } });
            if (!etudiant) {
                return { error: 'Etudiant non trouvé' };
            }
            return { etudiant };
        }
        catch (error) {
            console.log(error);
            return { error: `Erreur lors de l'upload du fichier ${error}` };
        }
    }
    async etuAllInfo() {
        const query = ` 
        SELECT *       
        FROM etudiant e
        INNER JOIN utilisateur u ON u.idUser = e.idUser ; `;
        const infoAll = await this.connection.query(query);
        return infoAll;
    }
};
exports.EtudiantService = EtudiantService;
exports.EtudiantService = EtudiantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(etudiant_entity_1.Etudiant)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(classe_entity_1.Classe)),
    __param(3, (0, typeorm_1.InjectRepository)(scolarite_entity_1.Scolarite)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        user_service_1.UserService,
        typeorm_2.Connection])
], EtudiantService);
//# sourceMappingURL=etudiant.service.js.map