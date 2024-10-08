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
exports.ProgrammematiereController = void 0;
const common_1 = require("@nestjs/common");
const programmematiere_service_1 = require("./programmematiere.service");
const create_programmematiere_dto_1 = require("../dto/create-programmematiere.dto");
const swagger_1 = require("@nestjs/swagger");
let ProgrammematiereController = class ProgrammematiereController {
    constructor(programmematiereService) {
        this.programmematiereService = programmematiereService;
    }
    create(dto) {
        return this.programmematiereService.create(dto);
    }
    find() {
        return this.programmematiereService.findMany();
    }
    update(id, dto) {
        return this.programmematiereService.update(id, dto);
    }
    delete(id) {
        return this.programmematiereService.delete(id);
    }
    info(id) {
        return this.programmematiereService.info(id);
    }
};
exports.ProgrammematiereController = ProgrammematiereController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un programme->matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme->matiere créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_programmematiere_dto_1.CreateProgrammematiereDto]),
    __metadata("design:returntype", void 0)
], ProgrammematiereController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les programme->matieres' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des programme->matieres' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgrammematiereController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'programme->matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme->matiere mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_programmematiere_dto_1.CreateProgrammematiereDto]),
    __metadata("design:returntype", void 0)
], ProgrammematiereController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un programme->matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme->matiere supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProgrammematiereController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un programme->matiere' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme->matiere info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProgrammematiereController.prototype, "info", null);
exports.ProgrammematiereController = ProgrammematiereController = __decorate([
    (0, common_1.Controller)('programmematiere'),
    (0, swagger_1.ApiTags)('programmematiere'),
    __metadata("design:paramtypes", [programmematiere_service_1.ProgrammematiereService])
], ProgrammematiereController);
//# sourceMappingURL=programmematiere.controller.js.map