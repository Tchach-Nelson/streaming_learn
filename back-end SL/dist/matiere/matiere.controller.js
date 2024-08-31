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
exports.MatiereController = void 0;
const common_1 = require("@nestjs/common");
const matiere_service_1 = require("./matiere.service");
const create_matiere_dto_1 = require("../dto/create-matiere.dto");
const swagger_1 = require("@nestjs/swagger");
let MatiereController = class MatiereController {
    constructor(matiereService) {
        this.matiereService = matiereService;
    }
    create(dto) {
        return this.matiereService.create(dto);
    }
    find() {
        return this.matiereService.findMany();
    }
    update(id, dto) {
        return this.matiereService.update(id, dto);
    }
    delete(id) {
        return this.matiereService.delete(id);
    }
    info(id) {
        return this.matiereService.info(id);
    }
};
exports.MatiereController = MatiereController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'matiere créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matiere_dto_1.CreateMatiereDto]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les matieres' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des matieres' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'matiere mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_matiere_dto_1.CreateMatiereDto]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'matiere supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'matiere info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "info", null);
exports.MatiereController = MatiereController = __decorate([
    (0, common_1.Controller)('matiere'),
    (0, swagger_1.ApiTags)('matiere'),
    __metadata("design:paramtypes", [matiere_service_1.MatiereService])
], MatiereController);
//# sourceMappingURL=matiere.controller.js.map