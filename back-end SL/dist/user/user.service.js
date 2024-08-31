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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepo, connection) {
        this.userRepo = userRepo;
        this.connection = connection;
    }
    async joinner(dto) {
        const query = ` 
        SELECT *
        FROM ${dto.table1} t1
        INNER JOIN ${dto.table2} t2 ON t1.${dto.cle1} = t2.${dto.cle2} AND t1.${dto.cle1} = ${dto.valeur}; `;
        try {
            const result = await this.connection.query(query);
            return result;
        }
        catch (error) {
            console.log(error);
            return { error: `Erreur ${error}` };
        }
    }
    async create(userDto) {
        const user = this.userRepo.create(userDto);
        return await this.userRepo.save(user);
    }
    findMany() {
        return this.userRepo.find();
    }
    async update(idUser, userDto) {
        const user = await this.userRepo.findOne({ where: { idUser } });
        Object.assign(user, userDto);
        return await this.userRepo.save(user);
    }
    async delete(idUser) {
        const user = await this.userRepo.findOne({ where: { idUser } });
        return await this.userRepo.remove(user);
    }
    async existUser(nom, pass) {
        const user = await this.userRepo.findOne({ where: { nom, pass } });
        return !!user;
    }
    async existUserLogin(nom, pass) {
        try {
            const user = await this.userRepo.findOne({
                where: {
                    nom: nom,
                    pass: pass
                }
            });
            if (!user)
                return ({ "message": `Cette utilisateur n'existe pas` });
            return user;
        }
        catch (error) {
            return ({ "error": `erreur ${error}` });
        }
    }
    async info(idUser) {
        try {
            const user = await this.userRepo.findOne({ where: { idUser } });
            if (!user) {
                return { error: 'Utilisateur non trouvé' };
            }
            return { user };
        }
        catch (error) {
            console.log(error);
            return { error: `Erreur lors de l'upload du fichier ${error}` };
        }
    }
    async infoEtu() {
        const etuInfo = await this.userRepo.find({ where: { type: 'Etudiant' } });
        return etuInfo.slice(-6).reverse();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Connection])
], UserService);
//# sourceMappingURL=user.service.js.map