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
exports.CoursController = void 0;
const common_1 = require("@nestjs/common");
const cours_service_1 = require("./cours.service");
const create_cours_dto_1 = require("../dto/create-cours.dto");
const swagger_1 = require("@nestjs/swagger");
let CoursController = class CoursController {
    constructor(coursService) {
        this.coursService = coursService;
    }
    create(dto) {
        return this.coursService.create(dto);
    }
    find() {
        return this.coursService.findMany();
    }
    update(id, dto) {
        return this.coursService.update(id, dto);
    }
    delete(id) {
        return this.coursService.delete(id);
    }
    infoClasse(id) {
        return this.coursService.infoClasse(id);
    }
    presence(id, idClasse) {
        return this.coursService.presence(id, idClasse);
    }
    participation(id, idClasse) {
        return this.coursService.participation(id, idClasse);
    }
    startCours(idNom) {
        return this.coursService.startCours(idNom);
    }
    connectCours(idClasse) {
        return this.coursService.connectCours(idClasse);
    }
};
exports.CoursController = CoursController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cours créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cours_dto_1.CreateCoursDto]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les courss' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des courss' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour un cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cours mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_cours_dto_1.CreateCoursDto]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cours supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('infoClasse/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cours info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "infoClasse", null);
__decorate([
    (0, common_1.Get)('presence/:id/:idClasse'),
    (0, swagger_1.ApiOperation)({ summary: 'Presence au cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statiques' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idClasse')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "presence", null);
__decorate([
    (0, common_1.Get)('participation/:id/:idClasse'),
    (0, swagger_1.ApiOperation)({ summary: 'Presence au cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statiques' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idClasse')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "participation", null);
__decorate([
    (0, common_1.Get)('startCours/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Presence au cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statiques' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "startCours", null);
__decorate([
    (0, common_1.Get)('connectCours/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Presence au cours' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statiques' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "connectCours", null);
exports.CoursController = CoursController = __decorate([
    (0, common_1.Controller)('cours'),
    (0, swagger_1.ApiTags)('cours'),
    __metadata("design:paramtypes", [cours_service_1.CoursService])
], CoursController);
//# sourceMappingURL=cours.controller.js.map