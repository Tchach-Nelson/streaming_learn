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
exports.Etudiant = void 0;
const typeorm_1 = require("typeorm");
let Etudiant = class Etudiant {
};
exports.Etudiant = Etudiant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Etudiant.prototype, "matricule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Etudiant.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Etudiant.prototype, "idClasse", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Etudiant.prototype, "idScolarite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "lettreMotivation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "bourse", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "specialite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Etudiant.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "diplomeNature", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "diplome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "bulletin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Etudiant.prototype, "redoublant", void 0);
exports.Etudiant = Etudiant = __decorate([
    (0, typeorm_1.Entity)({ name: 'etudiant' })
], Etudiant);
//# sourceMappingURL=etudiant.entity.js.map