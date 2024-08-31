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
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const note_service_1 = require("./note.service");
const create_note_dto_1 = require("../dto/create-note.dto");
const swagger_1 = require("@nestjs/swagger");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    create(dto) {
        return this.noteService.create(dto);
    }
    find() {
        return this.noteService.findMany();
    }
    update(id, dto) {
        return this.noteService.update(id, dto);
    }
    delete(id) {
        return this.noteService.delete(id);
    }
    info(id) {
        return this.noteService.info(id);
    }
    infoNote() {
        return this.noteService.infoNote();
    }
};
exports.NoteController = NoteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un Message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Message créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des message' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour du message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur info' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "info", null);
__decorate([
    (0, common_1.Get)('infoNote/'),
    (0, swagger_1.ApiOperation)({ summary: 'info sur un message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur info' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "infoNote", null);
exports.NoteController = NoteController = __decorate([
    (0, common_1.Controller)('note'),
    (0, swagger_1.ApiTags)('note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
//# sourceMappingURL=note.controller.js.map