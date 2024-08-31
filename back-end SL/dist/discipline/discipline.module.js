"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplineModule = void 0;
const common_1 = require("@nestjs/common");
const discipline_controller_1 = require("./discipline.controller");
const discipline_service_1 = require("./discipline.service");
const typeorm_1 = require("@nestjs/typeorm");
const discipline_entity_1 = require("./discipline.entity");
let DisciplineModule = class DisciplineModule {
};
exports.DisciplineModule = DisciplineModule;
exports.DisciplineModule = DisciplineModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([discipline_entity_1.Discipline])],
        controllers: [discipline_controller_1.DisciplineController],
        providers: [discipline_service_1.DisciplineService],
        exports: [typeorm_1.TypeOrmModule,]
    })
], DisciplineModule);
//# sourceMappingURL=discipline.module.js.map