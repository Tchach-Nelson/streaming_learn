"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScolariteModule = void 0;
const common_1 = require("@nestjs/common");
const scolarite_controller_1 = require("./scolarite.controller");
const scolarite_service_1 = require("./scolarite.service");
const typeorm_1 = require("@nestjs/typeorm");
const scolarite_entity_1 = require("./scolarite.entity");
let ScolariteModule = class ScolariteModule {
};
exports.ScolariteModule = ScolariteModule;
exports.ScolariteModule = ScolariteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([scolarite_entity_1.Scolarite])],
        controllers: [scolarite_controller_1.ScolariteController],
        providers: [scolarite_service_1.ScolariteService],
        exports: [typeorm_1.TypeOrmModule]
    })
], ScolariteModule);
//# sourceMappingURL=scolarite.module.js.map