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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("../dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("../dto/login.dto");
const join_tables_dto_1 = require("../dto/join-tables.dto");
const path_1 = require("path");
const fs_1 = require("fs");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    joinner(dto) {
        return this.userService.joinner(dto);
    }
    create(dto) {
        return this.userService.create(dto);
    }
    find() {
        return this.userService.findMany();
    }
    update(id, dto) {
        return this.userService.update(id, dto);
    }
    delete(id) {
        return this.userService.delete(id);
    }
    Login(user) {
        return this.userService.existUserLogin(user.nom, user.pass);
    }
    info(id) {
        return this.userService.info(id);
    }
    getFile(filename, res) {
        const filePath = (0, path_1.join)(__dirname, '../../', 'uploads', filename);
        console.log(filePath);
        if ((0, fs_1.existsSync)(filePath)) {
            const fileStream = (0, fs_1.createReadStream)(filePath);
            fileStream.pipe(res);
        }
        else {
            res.status(404).json({ message: 'File not found' });
        }
    }
    infoEtu() {
        return this.userService.infoEtu();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('/join'),
    (0, swagger_1.ApiOperation)({ summary: 'Joindre 2 tables' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'jointure faite' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_tables_dto_1.JoinTableDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "joinner", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Creer un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur créer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'lister les utilisateurs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des utilisateurs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mise a jour de l\'utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur mis a jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur supprimer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({ summary: 'Loger un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur logé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "Login", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Données sur un Utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Données affichées' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "info", null);
__decorate([
    (0, common_1.Get)('file/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('/infoEtu'),
    (0, swagger_1.ApiOperation)({ summary: 'info d\'etudiant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'info d\'etudiant' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "infoEtu", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map