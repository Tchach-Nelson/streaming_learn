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
exports.OperationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const operation_entity_1 = require("./operation.entity");
const typeorm_2 = require("typeorm");
const scolarite_entity_1 = require("../scolarite/scolarite.entity");
let OperationService = class OperationService {
    constructor(operationRepo, scolariteRepository, connection) {
        this.operationRepo = operationRepo;
        this.scolariteRepository = scolariteRepository;
        this.connection = connection;
    }
    async create(operationDto) {
        try {
            const operation = this.operationRepo.create(operationDto);
            await this.operationRepo.save(operation);
            this.resteCalcule(operation.idScolarite);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async findMany() {
        try {
            const query = ` 
            SELECT o.idOp, o.datePaiement, o.type, o.montant, u.nom as idScolarite
            from operation o
            INNER JOIN etudiant e on e.idScolarite = o.idScolarite
            INNER JOIN utilisateur u on u.idUser = e.idUser ; `;
            const infoAll = await this.connection.query(query);
            return infoAll;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async update(idOp, operationDto) {
        try {
            const operation = await this.operationRepo.findOne({ where: { idOp } });
            Object.assign(operation, operationDto);
            await this.operationRepo.save(operation);
            this.resteCalcule(operation.idScolarite);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async delete(idOp) {
        try {
            const operation = await this.operationRepo.findOne({ where: { idOp } });
            await this.operationRepo.remove(operation);
            this.resteCalcule(operation.idScolarite);
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async info(idOp) {
        try {
            const operation = await this.operationRepo.findOne({ where: { idOp } });
            return operation;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async infoScolarite(idScolarite) {
        try {
            const operation = await this.operationRepo.find({ where: { idScolarite } });
            return operation;
        }
        catch (error) {
            console.log(error);
            return { error: `erreur ${error}` };
        }
    }
    async resteCalcule(idScolarite) {
        await this.scolariteRepository.query(`
        CREATE TEMPORARY TABLE TempSums AS
        SELECT 
            (SELECT COALESCE(SUM(s.montant), 0) FROM scolarite s WHERE s.idScolarite = ?) AS total_scolarite,
            (SELECT COALESCE(SUM(o.montant), 0) FROM operation o WHERE o.idScolarite = ?) AS total_operation;
        `, [idScolarite, idScolarite]);
        await this.scolariteRepository.query(`
        UPDATE scolarite
        JOIN TempSums ON 1=1
        SET scolarite.reste = TempSums.total_scolarite - TempSums.total_operation
        WHERE scolarite.idScolarite = ?;
        `, [idScolarite]);
        await this.scolariteRepository.query(`
        DROP TEMPORARY TABLE TempSums;
        `);
    }
};
exports.OperationService = OperationService;
exports.OperationService = OperationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(operation_entity_1.Operation)),
    __param(1, (0, typeorm_1.InjectRepository)(scolarite_entity_1.Scolarite)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection])
], OperationService);
//# sourceMappingURL=operation.service.js.map