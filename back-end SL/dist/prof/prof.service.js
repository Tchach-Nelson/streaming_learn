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
exports.ProfService = void 0;
const common_1 = require("@nestjs/common");
const prof_entity_1 = require("./prof.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let ProfService = class ProfService {
    constructor(profRepo, connection, userRepo) {
        this.profRepo = profRepo;
        this.connection = connection;
        this.userRepo = userRepo;
    }
    async create(profDto) {
        const prof = this.profRepo.create(profDto);
        return await this.profRepo.save(prof);
    }
    findMany() {
        return this.profRepo.find();
    }
    async update(idProf, profDto) {
        const prof = await this.profRepo.findOne({ where: { idProf } });
        Object.assign(prof, profDto);
        return await this.profRepo.save(prof);
    }
    async delete(idProf) {
        const user = await this.profRepo.findOne({ where: { idProf } });
        return await this.profRepo.remove(user);
    }
    async profAllInfo() {
        const query = ` 
        SELECT * 
        FROM professeur p 
        INNER JOIN utilisateur u ON p.idUser = u.idUser; `;
        try {
            const infoAll = await this.connection.query(query);
            console.log(infoAll);
            const resultInfoAll = await Promise.all(infoAll.map((result) => {
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
                });
            }));
            return resultInfoAll;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async postprofAllInfo(dto) {
        try {
            const user = {
                'idUser ': null,
                'nom': dto.nom,
                'pass': 'null',
                'date': dto.date,
                'email': dto.email,
                'sexe': dto.sexe,
                'type': 'Prof',
                'telephone': dto.telephone,
                'status ': 1
            };
            const userInfo = await this.userRepo.save(user);
            const prof = {
                'idUser': userInfo.idUser,
                'idProf': null,
                'specialite': dto.specialite,
                'poste': dto.poste,
                'salaire': dto.salaire
            };
            const result = this.profRepo.create(prof);
            return await this.profRepo.save(result);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async deleteAllInfo(idProf) {
        try {
            const prof = await this.profRepo.findOne({ where: { idProf } });
            await this.profRepo.remove(prof);
            console.log(prof);
            const user = await this.userRepo.findOne({ where: { idUser: prof.idUser } });
            return await this.userRepo.remove(user);
        }
        catch (error) {
            console.log(error);
            return ({ erreur: `erreur lors de la supression ${error} ` });
        }
    }
    async updateAllInfo(idProf, dto) {
        try {
            const profD = await this.profRepo.findOne({ where: { idProf } });
            const prof = {
                'idUser': profD.idUser,
                'idProf': dto.idProf,
                'specialite': dto.specialite,
                'poste': dto.poste,
                'salaire': dto.salaire
            };
            Object.assign(profD, prof);
            await this.profRepo.save(prof);
            const userD = await this.profRepo.findOne({ where: { idUser: profD.idUser } });
            const user = {
                'idUser': profD.idUser,
                'nom': dto.nom,
                'pass': 'null',
                'date': dto.date,
                'email': dto.email,
                'sexe': dto.sexe,
                'type': 'Prof',
                'telephone': dto.telephone,
                'status ': 1
            };
            return await this.userRepo.save(user);
        }
        catch (error) {
            console.log(error);
            return ({ erreur: `erreur lors de la supression ${error} ` });
        }
    }
};
exports.ProfService = ProfService;
exports.ProfService = ProfService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prof_entity_1.Prof)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        typeorm_2.Repository])
], ProfService);
//# sourceMappingURL=prof.service.js.map