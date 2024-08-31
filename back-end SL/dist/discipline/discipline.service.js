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
exports.DisciplineService = void 0;
const common_1 = require("@nestjs/common");
const discipline_entity_1 = require("./discipline.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DisciplineService = class DisciplineService {
    constructor(displineRepo) {
        this.displineRepo = displineRepo;
    }
    async create(displineDto) {
        try {
            const displine = this.displineRepo.create(displineDto);
            return await this.displineRepo.save(displine);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    findMany() {
        try {
            return this.displineRepo.find();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idDiscipline, displineDto) {
        try {
            const displine = await this.displineRepo.findOne({ where: { idDiscipline } });
            Object.assign(displine, displineDto);
            return await this.displineRepo.save(displine);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idDiscipline) {
        try {
            const displine = await this.displineRepo.findOne({ where: { idDiscipline } });
            return await this.displineRepo.remove(displine);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(idDiscipline) {
        try {
            const displine = await this.displineRepo.findOne({ where: { idDiscipline } });
            return displine;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
};
exports.DisciplineService = DisciplineService;
exports.DisciplineService = DisciplineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(discipline_entity_1.Discipline)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DisciplineService);
//# sourceMappingURL=discipline.service.js.map