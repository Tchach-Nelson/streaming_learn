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
exports.EtudiantController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const etudiant_service_1 = require("./etudiant.service");
const create_etudiant_dto_1 = require("../dto/create-etudiant.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let EtudiantController = class EtudiantController {
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    create(dto) {
        return this.etudiantService.create(dto);
    }
    uploadFile(id, file) {
        return this.etudiantService.uploadFile(id, file);
    }
    find() {
        return this.etudiantService.findMany();
    }
    update(id, dto) {
        return this.etudiantService.update(id, dto);
    }
    delete(id) {
        return this.etudiantService.delete(id);
    }
    info(id) {
        return this.etudiantService.info(id);
    }
    etuAllInfo() {
        return this.etudiantService.etuAllInfo();
    }
};
exports.EtudiantController = EtudiantController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un etudiant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'etudiant créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etudiant_dto_1.CreateEtudiantDto]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const ext = (0, path_1.extname)(file.originalname);
                const fileName = `${req.params.id}-${file.originalname}`;
                console.log(file);
                callback(null, fileName);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les etudiants' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des etudiants' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'etudiant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'etudiant mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_etudiant_dto_1.CreateEtudiantDto]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un etudiant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'etudiant supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Données sur un etudiant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Données affichées' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "info", null);
__decorate([
    (0, common_1.Get)('etuAllInfo/'),
    (0, swagger_1.ApiOperation)({ summary: 'Données sur un etudiant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Données affichées' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "etuAllInfo", null);
exports.EtudiantController = EtudiantController = __decorate([
    (0, common_1.Controller)('etudiant'),
    (0, swagger_1.ApiTags)('etudiant'),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantController);
//# sourceMappingURL=etudiant.controller.js.map