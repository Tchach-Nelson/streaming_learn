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
exports.ProfController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prof_service_1 = require("./prof.service");
const create_admin_dto_1 = require("../dto/create-admin.dto");
const create_allProf_dto_1 = require("../dto/create-allProf.dto");
let ProfController = class ProfController {
    constructor(profService) {
        this.profService = profService;
    }
    create(dto) {
        return this.profService.create(dto);
    }
    find() {
        return this.profService.findMany();
    }
    update(id, dto) {
        return this.profService.update(id, dto);
    }
    delete(id) {
        return this.profService.delete(id);
    }
    allInfo() {
        return this.profService.profAllInfo();
    }
    postAllInfo(dto) {
        return this.profService.postprofAllInfo(dto);
    }
    deleteAllInfo(id) {
        return this.profService.deleteAllInfo(id);
    }
    updateAllInfo(id, dto) {
        return this.profService.updateAllInfo(id, dto);
    }
};
exports.ProfController = ProfController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un prof' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Prof créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les prof' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des prof' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/allInfo/'),
    (0, swagger_1.ApiOperation)({ summary: 'lister allInfo prof' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste allInfo prof' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "allInfo", null);
__decorate([
    (0, common_1.Post)('/allInfo/'),
    (0, swagger_1.ApiOperation)({ summary: 'lister allInfo prof' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste allInfo prof' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_allProf_dto_1.CreateAllProfDto]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "postAllInfo", null);
__decorate([
    (0, common_1.Delete)('/allInfo/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'lister allInfo prof' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste allInfo prof' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "deleteAllInfo", null);
__decorate([
    (0, common_1.Put)('/allInfo/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'lister allInfo prof' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste allInfo prof' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_allProf_dto_1.CreateAllProfDto]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "updateAllInfo", null);
exports.ProfController = ProfController = __decorate([
    (0, common_1.Controller)('prof'),
    (0, swagger_1.ApiTags)('prof'),
    __metadata("design:paramtypes", [prof_service_1.ProfService])
], ProfController);
//# sourceMappingURL=prof.controller.js.map