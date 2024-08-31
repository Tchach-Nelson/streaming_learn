"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantModule = void 0;
const common_1 = require("@nestjs/common");
const etudiant_controller_1 = require("./etudiant.controller");
const etudiant_service_1 = require("./etudiant.service");
const typeorm_1 = require("@nestjs/typeorm");
const etudiant_entity_1 = require("./etudiant.entity");
const user_module_1 = require("../user/user.module");
const classe_module_1 = require("../classe/classe.module");
const scolarite_module_1 = require("../scolarite/scolarite.module");
let EtudiantModule = class EtudiantModule {
};
exports.EtudiantModule = EtudiantModule;
exports.EtudiantModule = EtudiantModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([etudiant_entity_1.Etudiant]), user_module_1.UserModule, classe_module_1.ClasseModule, scolarite_module_1.ScolariteModule],
        controllers: [etudiant_controller_1.EtudiantController],
        providers: [etudiant_service_1.EtudiantService]
    })
], EtudiantModule);
//# sourceMappingURL=etudiant.module.js.map