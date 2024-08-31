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
exports.DisciplineetudiantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const disciplineetudiant_entity_1 = require("./disciplineetudiant.entity");
const typeorm_2 = require("typeorm");
const discipline_entity_1 = require("../discipline/discipline.entity");
let DisciplineetudiantService = class DisciplineetudiantService {
    constructor(disciplineetudiantRepo, displineRepo, connection) {
        this.disciplineetudiantRepo = disciplineetudiantRepo;
        this.displineRepo = displineRepo;
        this.connection = connection;
    }
    async create(disciplineetudiantDto) {
        try {
            const admin = this.disciplineetudiantRepo.create(disciplineetudiantDto);
            return await this.disciplineetudiantRepo.save(admin);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    findMany() {
        try {
            return this.disciplineetudiantRepo.find();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(iddisciplineetudiant, disciplineetudiantDto) {
        try {
            const admin = await this.disciplineetudiantRepo.findOne({ where: { iddisciplineetudiant } });
            Object.assign(admin, disciplineetudiantDto);
            return await this.disciplineetudiantRepo.save(admin);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(iddisciplineetudiant) {
        try {
            const admin = await this.disciplineetudiantRepo.findOne({ where: { iddisciplineetudiant } });
            return await this.disciplineetudiantRepo.remove(admin);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(matricule) {
        try {
            const displines = await this.disciplineetudiantRepo.find({ where: { matricule } });
            const nomDisplines = await Promise.all(displines.map(async (displines) => {
                const idDiscipline = displines.idDiscipline;
                const nomDispline = await this.displineRepo.find({ where: { idDiscipline } });
                return nomDispline[0].valeur;
            }));
            return nomDisplines;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async infoDispline() {
        try {
            const query = ` 
            SELECT de.iddisciplineetudiant , de.idUser as idUser , u.nom as matricule , d.valeur as idDiscipline , de.motif  
            FROM disciplineetudiant de 
            INNER JOIN discipline d on d.idDiscipline = de.idDiscipline
            INNER JOIN utilisateur u on u.idUser = de.idUser ; `;
            const infoAll = await this.connection.query(query);
            return infoAll;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async postInfoDispline(dto) {
        try {
            return "infoAll";
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
};
exports.DisciplineetudiantService = DisciplineetudiantService;
exports.DisciplineetudiantService = DisciplineetudiantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(disciplineetudiant_entity_1.Disciplineetudiant)),
    __param(1, (0, typeorm_1.InjectRepository)(discipline_entity_1.Discipline)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection])
], DisciplineetudiantService);
//# sourceMappingURL=disciplineetudiant.service.js.map