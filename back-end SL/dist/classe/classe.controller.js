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
exports.ClasseController = void 0;
const common_1 = require("@nestjs/common");
const classe_service_1 = require("./classe.service");
const Create_classe_dto_1 = require("../dto/Create-classe.dto");
const swagger_1 = require("@nestjs/swagger");
let ClasseController = class ClasseController {
    constructor(classeService) {
        this.classeService = classeService;
    }
    create(dto) {
        return this.classeService.create(dto);
    }
    find() {
        return this.classeService.findMany();
    }
    update(id, dto) {
        return this.classeService.update(id, dto);
    }
    delete(id) {
        return this.classeService.delete(id);
    }
    info(id) {
        return this.classeService.info(id);
    }
};
exports.ClasseController = ClasseController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer une classe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'classe créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_classe_dto_1.CreateClasseDto]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les classes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des classes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de la classe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'classe mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Create_classe_dto_1.CreateClasseDto]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une classe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'classe supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un classe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'classe info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "info", null);
exports.ClasseController = ClasseController = __decorate([
    (0, common_1.Controller)('classe'),
    (0, swagger_1.ApiTags)('classe'),
    __metadata("design:paramtypes", [classe_service_1.ClasseService])
], ClasseController);
//# sourceMappingURL=classe.controller.js.map