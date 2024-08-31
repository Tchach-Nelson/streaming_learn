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
exports.Matiere = void 0;
const typeorm_1 = require("typeorm");
let Matiere = class Matiere {
};
exports.Matiere = Matiere;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Matiere.prototype, "idMatiere", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matiere.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matiere.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matiere.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matiere.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matiere.prototype, "dateNote", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matiere.prototype, "decision", void 0);
exports.Matiere = Matiere = __decorate([
    (0, typeorm_1.Entity)({ name: 'matiere' })
], Matiere);
//# sourceMappingURL=matiere.entity.js.map