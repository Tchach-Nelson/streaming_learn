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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const typeorm_1 = require("typeorm");
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Message.prototype, "idMessage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Message.prototype, "idCours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Message.prototype, "contenu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Message.prototype, "heure", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Message.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Message.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Message.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Message.prototype, "idClasse", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Message.prototype, "userNom", void 0);
exports.Message = Message = __decorate([
    (0, typeorm_1.Entity)({ name: 'message' })
], Message);
//# sourceMappingURL=message.entity.js.map