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
exports.ClasseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const classe_entity_1 = require("./classe.entity");
const typeorm_2 = require("typeorm");
let ClasseService = class ClasseService {
    constructor(classeRepo) {
        this.classeRepo = classeRepo;
    }
    async create(classeDto) {
        try {
            const classe = this.classeRepo.create(classeDto);
            return await this.classeRepo.save(classe);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    findMany() {
        try {
            return this.classeRepo.find();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idClasse, classeDto) {
        try {
            const classe = await this.classeRepo.findOne({ where: { idClasse } });
            Object.assign(classe, classeDto);
            return await this.classeRepo.save(classe);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idClasse) {
        try {
            const classe = await this.classeRepo.findOne({ where: { idClasse } });
            return await this.classeRepo.remove(classe);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(idClasse) {
        try {
            const classe = await this.classeRepo.findOne({ where: { idClasse } });
            return classe;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
};
exports.ClasseService = ClasseService;
exports.ClasseService = ClasseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(classe_entity_1.Classe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClasseService);
//# sourceMappingURL=classe.service.js.map