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
exports.ProgrammeController = void 0;
const common_1 = require("@nestjs/common");
const create_programme_dto_1 = require("../dto/create-programme.dto");
const swagger_1 = require("@nestjs/swagger");
const programme_service_1 = require("./programme.service");
let ProgrammeController = class ProgrammeController {
    constructor(programmeService) {
        this.programmeService = programmeService;
    }
    create(dto) {
        return this.programmeService.create(dto);
    }
    find() {
        return this.programmeService.findMany();
    }
    update(id, dto) {
        return this.programmeService.update(id, dto);
    }
    delete(id) {
        return this.programmeService.delete(id);
    }
    info(id) {
        return this.programmeService.info(id);
    }
    programmeClasse(id) {
        return this.programmeService.programmeMatiere(id);
    }
    infoProgramme() {
        return this.programmeService.infoProgramme();
    }
};
exports.ProgrammeController = ProgrammeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un programme' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_programme_dto_1.CreateProgrammeDto]),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les programmes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des programmes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'programme' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_programme_dto_1.CreateProgrammeDto]),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un programme' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un programme' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "info", null);
__decorate([
    (0, common_1.Get)('programme/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'programme' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "programmeClasse", null);
__decorate([
    (0, common_1.Get)('infoProgramme'),
    (0, swagger_1.ApiOperation)({ summary: 'programme' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'programme' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgrammeController.prototype, "infoProgramme", null);
exports.ProgrammeController = ProgrammeController = __decorate([
    (0, common_1.Controller)('programme'),
    (0, swagger_1.ApiTags)('programme'),
    __metadata("design:paramtypes", [programme_service_1.ProgrammeService])
], ProgrammeController);
//# sourceMappingURL=programme.controller.js.map