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
exports.ScolariteController = void 0;
const common_1 = require("@nestjs/common");
const scolarite_service_1 = require("./scolarite.service");
const create_scolarite_dto_1 = require("../dto/create-scolarite.dto");
const swagger_1 = require("@nestjs/swagger");
let ScolariteController = class ScolariteController {
    constructor(scolariteService) {
        this.scolariteService = scolariteService;
    }
    create(dto) {
        return this.scolariteService.create(dto);
    }
    find() {
        return this.scolariteService.findMany();
    }
    update(id, dto) {
        return this.scolariteService.update(id, dto);
    }
    delete(id) {
        return this.scolariteService.delete(id);
    }
    info(id) {
        return this.scolariteService.info(id);
    }
};
exports.ScolariteController = ScolariteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer la scolarité' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'scolarité créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scolarite_dto_1.CreateScolariteDto]),
    __metadata("design:returntype", void 0)
], ScolariteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les scolarités' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des scolarités' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScolariteController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'scolarité' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'scolarité mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_scolarite_dto_1.CreateScolariteDto]),
    __metadata("design:returntype", void 0)
], ScolariteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer la scolarité' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'scolarité supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ScolariteController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur la scolarité' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'scolarité info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ScolariteController.prototype, "info", null);
exports.ScolariteController = ScolariteController = __decorate([
    (0, common_1.Controller)('scolarite'),
    (0, swagger_1.ApiTags)('scolarite'),
    __metadata("design:paramtypes", [scolarite_service_1.ScolariteService])
], ScolariteController);
//# sourceMappingURL=scolarite.controller.js.map