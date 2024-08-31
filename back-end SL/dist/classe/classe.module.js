"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasseModule = void 0;
const common_1 = require("@nestjs/common");
const classe_controller_1 = require("./classe.controller");
const classe_service_1 = require("./classe.service");
const typeorm_1 = require("@nestjs/typeorm");
const classe_entity_1 = require("./classe.entity");
let ClasseModule = class ClasseModule {
};
exports.ClasseModule = ClasseModule;
exports.ClasseModule = ClasseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([classe_entity_1.Classe])],
        controllers: [classe_controller_1.ClasseController],
        providers: [classe_service_1.ClasseService],
        exports: [typeorm_1.TypeOrmModule]
    })
], ClasseModule);
//# sourceMappingURL=classe.module.js.map