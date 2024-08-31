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
exports.OperationController = void 0;
const common_1 = require("@nestjs/common");
const operation_service_1 = require("./operation.service");
const create_operation_dto_1 = require("../dto/create-operation.dto");
const swagger_1 = require("@nestjs/swagger");
let OperationController = class OperationController {
    constructor(operationService) {
        this.operationService = operationService;
    }
    create(dto) {
        return this.operationService.create(dto);
    }
    find() {
        return this.operationService.findMany();
    }
    update(id, dto) {
        return this.operationService.update(id, dto);
    }
    delete(id) {
        return this.operationService.delete(id);
    }
    info(id) {
        return this.operationService.info(id);
    }
    infoScolarite(id) {
        return this.operationService.infoScolarite(id);
    }
};
exports.OperationController = OperationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un operation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'operation créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_operation_dto_1.CreateOperationDto]),
    __metadata("design:returntype", void 0)
], OperationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les operations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des operations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'operation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'operation mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_operation_dto_1.CreateOperationDto]),
    __metadata("design:returntype", void 0)
], OperationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un operation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'operation supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OperationController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un operation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'operation info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OperationController.prototype, "info", null);
__decorate([
    (0, common_1.Get)('infoScolarite/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'infoScolarite sur un operation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'operation infoScolarite' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OperationController.prototype, "infoScolarite", null);
exports.OperationController = OperationController = __decorate([
    (0, common_1.Controller)('operation'),
    (0, swagger_1.ApiTags)('operation'),
    __metadata("design:paramtypes", [operation_service_1.OperationService])
], OperationController);
//# sourceMappingURL=operation.controller.js.map