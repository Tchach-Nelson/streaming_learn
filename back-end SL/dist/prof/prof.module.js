"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfModule = void 0;
const common_1 = require("@nestjs/common");
const prof_entity_1 = require("./prof.entity");
const prof_controller_1 = require("./prof.controller");
const prof_service_1 = require("./prof.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../user/user.module");
let ProfModule = class ProfModule {
};
exports.ProfModule = ProfModule;
exports.ProfModule = ProfModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prof_entity_1.Prof]), user_module_1.UserModule],
        controllers: [prof_controller_1.ProfController],
        providers: [prof_service_1.ProfService]
    })
], ProfModule);
//# sourceMappingURL=prof.module.js.map