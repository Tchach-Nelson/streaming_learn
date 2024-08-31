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
exports.ParticipationController = void 0;
const common_1 = require("@nestjs/common");
const participation_service_1 = require("./participation.service");
const create_participation_dto_1 = require("../dto/create-participation.dto");
const swagger_1 = require("@nestjs/swagger");
let ParticipationController = class ParticipationController {
    constructor(participationService) {
        this.participationService = participationService;
    }
    create(dto) {
        return this.participationService.create(dto);
    }
    find() {
        return this.participationService.findMany();
    }
    update(id, dto) {
        return this.participationService.update(id, dto);
    }
    delete(id) {
        return this.participationService.delete(id);
    }
    info(id) {
        return this.participationService.info(id);
    }
};
exports.ParticipationController = ParticipationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un participation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'participation créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participation_dto_1.CreateParticipationDto]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les participations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des participations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'participation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'participation mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_participation_dto_1.CreateParticipationDto]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un participation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'participation supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un participation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'participation info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "info", null);
exports.ParticipationController = ParticipationController = __decorate([
    (0, common_1.Controller)('participation'),
    (0, swagger_1.ApiTags)('participation'),
    __metadata("design:paramtypes", [participation_service_1.ParticipationService])
], ParticipationController);
//# sourceMappingURL=participation.controller.js.map