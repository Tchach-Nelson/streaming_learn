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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const create_message_dto_1 = require("../dto/create-message.dto");
const swagger_1 = require("@nestjs/swagger");
const create_annonceInfo_dto_1 = require("../dto/create-annonceInfo.dto");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    create(dto) {
        return this.messageService.create(dto);
    }
    find() {
        return this.messageService.findMany();
    }
    update(id, dto) {
        return this.messageService.update(id, dto);
    }
    delete(id) {
        return this.messageService.delete(id);
    }
    annonce(idClasse) {
        console.log(idClasse);
        return this.messageService.annonce(idClasse);
    }
    annonceInfo() {
        return this.messageService.annonceInfo();
    }
    postAnnonceInfo(dto) {
        return this.messageService.postAnnonceInfo(dto);
    }
    deleteAnnonceInfo(id) {
        return this.messageService.delete(id);
    }
    updateAnnonceInfo(id, dto) {
        return this.messageService.updateAnnonceInfo(id, dto);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un Message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Message créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des message' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour du message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/annonce/:idClasse'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les annonces' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Annonce Listé' }),
    __param(0, (0, common_1.Param)('idClasse')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "annonce", null);
__decorate([
    (0, common_1.Get)('/annonceInfo'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les annonces' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Annonce Listé' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "annonceInfo", null);
__decorate([
    (0, common_1.Post)('/annonceInfo'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les annonces' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Annonce Listé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_annonceInfo_dto_1.CreateAnnonceInfoDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "postAnnonceInfo", null);
__decorate([
    (0, common_1.Delete)('/annonceInfo/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les annonces' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Annonce Listé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "deleteAnnonceInfo", null);
__decorate([
    (0, common_1.Put)('/annonceInfo/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les annonces' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Annonce Listé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_annonceInfo_dto_1.CreateAnnonceInfoDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "updateAnnonceInfo", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('message'),
    (0, swagger_1.ApiTags)('Message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map