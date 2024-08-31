"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammematiereModule = void 0;
const common_1 = require("@nestjs/common");
const programmematiere_controller_1 = require("./programmematiere.controller");
const programmematiere_service_1 = require("./programmematiere.service");
const typeorm_1 = require("@nestjs/typeorm");
const programmematiere_entity_1 = require("./programmematiere.entity");
let ProgrammematiereModule = class ProgrammematiereModule {
};
exports.ProgrammematiereModule = ProgrammematiereModule;
exports.ProgrammematiereModule = ProgrammematiereModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([programmematiere_entity_1.Programmematiere])],
        controllers: [programmematiere_controller_1.ProgrammematiereController],
        providers: [programmematiere_service_1.ProgrammematiereService],
        exports: [typeorm_1.TypeOrmModule]
    })
], ProgrammematiereModule);
//# sourceMappingURL=programmematiere.module.js.map