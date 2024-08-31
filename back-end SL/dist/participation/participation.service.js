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
exports.ParticipationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participation_entity_1 = require("./participation.entity");
const typeorm_2 = require("typeorm");
let ParticipationService = class ParticipationService {
    constructor(participationRepo) {
        this.participationRepo = participationRepo;
    }
    async create(participationDto) {
        try {
            const participation = this.participationRepo.create(participationDto);
            return await this.participationRepo.save(participation);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    findMany() {
        try {
            return this.participationRepo.find();
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idUser, participationDto) {
        try {
            const participation = await this.participationRepo.findOne({ where: { idUser } });
            Object.assign(participation, participationDto);
            return await this.participationRepo.save(participation);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idUser) {
        try {
            const participation = await this.participationRepo.findOne({ where: { idUser } });
            return await this.participationRepo.remove(participation);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(idUser) {
        try {
            const participation = await this.participationRepo.findOne({ where: { idUser } });
            return participation;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async nbreCours(idUser) {
        try {
            const participation = await this.participationRepo.findAndCount({ where: { idUser } });
            return participation;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
};
exports.ParticipationService = ParticipationService;
exports.ParticipationService = ParticipationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(participation_entity_1.Participation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParticipationService);
//# sourceMappingURL=participation.service.js.map