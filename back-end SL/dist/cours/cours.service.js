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
exports.CoursService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cours_entity_1 = require("./cours.entity");
const typeorm_2 = require("typeorm");
const participation_entity_1 = require("../participation/participation.entity");
const programme_entity_1 = require("../programme/programme.entity");
const programmematiere_entity_1 = require("../programmematiere/programmematiere.entity");
let CoursService = class CoursService {
    constructor(coursRepo, participationRepo, connection, profRepo, matiereRepo) {
        this.coursRepo = coursRepo;
        this.participationRepo = participationRepo;
        this.connection = connection;
        this.profRepo = profRepo;
        this.matiereRepo = matiereRepo;
    }
    async create(coursDto) {
        try {
            const cours = this.coursRepo.create(coursDto);
            return await this.coursRepo.save(cours);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async findMany() {
        try {
            const query = ` 
            SELECT c.idCours , m.nom as idMatiere , c.date, c.uuid, c.duree, u.nom as idProf  , cl.nomClasse as idClasse       
            FROM cours c
            INNER JOIN matiere m ON c.idMatiere = m.idMatiere
            INNER JOIN professeur p ON p.idProf = c.idProf
            INNER JOIN utilisateur u ON u.idUser = p.idUser
            INNER JOIN classe cl ON cl.idClasse = c.idClasse ; `;
            const infoAll = await this.connection.query(query);
            return infoAll;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idCours, coursDto) {
        try {
            const cours = await this.coursRepo.findOne({ where: { idCours } });
            Object.assign(cours, coursDto);
            return await this.coursRepo.save(cours);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idCours) {
        try {
            const cours = await this.coursRepo.findOne({ where: { idCours } });
            return await this.coursRepo.remove(cours);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async infoClasse(idClasse) {
        try {
            const cours = await this.coursRepo.find({
                where: [
                    { idClasse: idClasse },
                    { idClasse: 0 }
                ],
                order: {
                    idCours: 'DESC'
                }
            });
            return cours;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async presence(idUser, idClasse) {
        try {
            const nbreCoursTotal = await this.coursRepo.count({ where: { idClasse } });
            const nbreCoursFait = await this.participationRepo.findAndCount({ where: { idUser } });
            console.log(nbreCoursFait[1]);
            let valeur = (nbreCoursFait[1] / nbreCoursTotal) * 100;
            console.log(valeur);
            if (Number.isNaN(valeur)) {
                valeur = 0;
            }
            const presence = {
                'presence': valeur,
                'absence': 100 - valeur
            };
            return presence;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async participation(idUser, idClasse) {
        try {
            const cours = await this.coursRepo.find({
                where: { idClasse },
                order: { idCours: 'DESC' },
                take: 6
            });
            const participation = await Promise.all(cours.map(async (cour) => {
                try {
                    const valeur = await this.participationRepo.find({ where: [
                            { idUser: idUser, idCours: cour.idCours }
                        ] });
                    return valeur[0].valeur;
                }
                catch (error) {
                    return 0;
                }
            }));
            return participation.reverse();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async startCours(idNom) {
        const currentDate = new Date();
        const Actudate = currentDate.toISOString().split('T')[0];
        console.log(Actudate);
        const currentDay = currentDate.getDay();
        console.log(idNom);
        const prog = await this.profRepo.findOne({ where: { idNomProf: idNom, date: Actudate } });
        if (!prog) {
            return "Non programmé";
        }
        const matiere = await this.matiereRepo.findOne({ where: { idProgramme: prog.idProgramme } });
        console.log(matiere);
        const idProf = Number(idNom.split('-')[0]);
        const existingCours = await this.coursRepo.findOne({ where: { date: Actudate, idMatiere: matiere.idMatiere, idClasse: prog.idClasse } });
        if (existingCours) {
            return `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`;
        }
        const dto = {
            'idCours': null,
            'idProf': idProf,
            'idMatiere': matiere.idMatiere,
            'date': Actudate,
            'uuid': `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`,
            'idClasse': prog.idClasse,
            'duree': 0
        };
        const cours = this.coursRepo.create(dto);
        await this.coursRepo.save(cours);
        return `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`;
    }
    async connectCours(idClasse) {
        const currentDate = new Date();
        const Actudate = currentDate.toISOString().split('T')[0];
        console.log(Actudate);
        const currentDay = currentDate.getDay();
        console.log(idClasse);
        const prog = await this.profRepo.findOne({ where: { idClasse: idClasse, date: Actudate } });
        if (!prog) {
            return "Non programmé";
        }
        return `${prog.idProgramme}||${prog.idClasse}||${prog.idNomProf}`;
    }
};
exports.CoursService = CoursService;
exports.CoursService = CoursService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cours_entity_1.Cours)),
    __param(1, (0, typeorm_1.InjectRepository)(participation_entity_1.Participation)),
    __param(3, (0, typeorm_1.InjectRepository)(programme_entity_1.Programme)),
    __param(4, (0, typeorm_1.InjectRepository)(programmematiere_entity_1.Programmematiere)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CoursService);
//# sourceMappingURL=cours.service.js.map