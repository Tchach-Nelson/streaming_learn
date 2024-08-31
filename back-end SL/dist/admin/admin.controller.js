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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("../dto/create-admin.dto");
const swagger_1 = require("@nestjs/swagger");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    create(dto) {
        return this.adminService.create(dto);
    }
    find() {
        return this.adminService.findMany();
    }
    update(id, dto) {
        return this.adminService.update(id, dto);
    }
    delete(id) {
        return this.adminService.delete(id);
    }
    info(id) {
        return this.adminService.info(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les Admins' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des Admins' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "info", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, swagger_1.ApiTags)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map