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
exports.ProgrammeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const programme_entity_1 = require("./programme.entity");
const typeorm_2 = require("typeorm");
const programmematiere_entity_1 = require("../programmematiere/programmematiere.entity");
let ProgrammeService = class ProgrammeService {
    constructor(programmeRepo, connection, programmematiereRepo) {
        this.programmeRepo = programmeRepo;
        this.connection = connection;
        this.programmematiereRepo = programmematiereRepo;
    }
    async create(participationDto) {
        try {
            const participation = this.programmeRepo.create(participationDto);
            await this.programmeRepo.save(participation);
            if (participationDto.idMatiere) {
                const programmematiere = this.programmematiereRepo.create({
                    'idMatiere': participationDto.idMatiere,
                    'idProgramme': participation.idProgramme
                });
                await this.programmematiereRepo.save(programmematiere);
            }
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    findMany() {
        try {
            return this.programmeRepo.find();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idProgramme, participationDto) {
        try {
            const participation = await this.programmeRepo.findOne({ where: { idProgramme } });
            Object.assign(participation, participationDto);
            await this.programmeRepo.save(participation);
            const programmeMatiere = await this.programmematiereRepo.findOne({ where: { idProgramme, idMatiere: participationDto.idMatiere } });
            await this.programmematiereRepo.remove(programmeMatiere);
            Object.assign(programmeMatiere, {
                'idMatiere': participationDto.idMatiere,
                'idProgramme': participation.idProgramme
            });
            await this.programmematiereRepo.save(programmeMatiere);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idProgramme) {
        try {
            const participation = await this.programmeRepo.findOne({ where: { idProgramme } });
            await this.programmeRepo.remove(participation);
            const programmeMatiere = await this.programmematiereRepo.findOne({ where: { idProgramme } });
            await this.programmematiereRepo.remove(programmeMatiere);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(idProgramme) {
        try {
            const participation = await this.programmeRepo.findOne({ where: { idProgramme } });
            return participation;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async programmeMatiere(idClasse) {
        const query = ` 
        SELECT *       
        FROM programme p
        INNER JOIN programmematiere pm ON p.idProgramme = pm.idProgramme
        Inner JOIN matiere m on m.idMatiere = pm.idMatiere 
        WHERE p.idClasse = ${idClasse}  ; `;
        try {
            const result = await this.connection.query(query);
            const programme = await Promise.all(result.map(result => {
                return ({
                    'heure': result.heure,
                    'date': result.date,
                    'matiere': result.nom
                });
            }));
            return programme;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async infoProgramme() {
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
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
};
exports.ProgrammeService = ProgrammeService;
exports.ProgrammeService = ProgrammeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(programme_entity_1.Programme)),
    __param(2, (0, typeorm_1.InjectRepository)(programmematiere_entity_1.Programmematiere)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        typeorm_2.Repository])
], ProgrammeService);
//# sourceMappingURL=programme.service.js.map