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
exports.ProgrammematiereService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const programmematiere_entity_1 = require("./programmematiere.entity");
const typeorm_2 = require("typeorm");
let ProgrammematiereService = class ProgrammematiereService {
    constructor(programmematiere, connection) {
        this.programmematiere = programmematiere;
        this.connection = connection;
    }
    async create(programmematiereDto) {
        try {
            const programmematiere = this.programmematiere.create(programmematiereDto);
            return await this.programmematiere.save(programmematiere);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    findMany() {
        try {
            return this.programmematiere.find();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idMatiere, programmematiereDto) {
        try {
            const programmematiere = await this.programmematiere.findOne({ where: { idMatiere } });
            Object.assign(programmematiere, programmematiereDto);
            return await this.programmematiere.save(programmematiere);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idMatiere) {
        try {
            const programmematiere = await this.programmematiere.findOne({ where: { idMatiere } });
            return await this.programmematiere.remove(programmematiere);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(idMatiere) {
        try {
            const programmematiere = await this.programmematiere.findOne({ where: { idMatiere } });
            return programmematiere;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
};
exports.ProgrammematiereService = ProgrammematiereService;
exports.ProgrammematiereService = ProgrammematiereService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(programmematiere_entity_1.Programmematiere)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], ProgrammematiereService);
//# sourceMappingURL=programmematiere.service.js.map