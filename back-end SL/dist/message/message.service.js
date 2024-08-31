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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_entity_1 = require("./message.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const classe_entity_1 = require("../classe/classe.entity");
let MessageService = class MessageService {
    constructor(messageRepo, connection, userRepo, classeRepo) {
        this.messageRepo = messageRepo;
        this.connection = connection;
        this.userRepo = userRepo;
        this.classeRepo = classeRepo;
    }
    async create(messageDto) {
        const message = this.messageRepo.create(messageDto);
        return await this.messageRepo.save(message);
    }
    findMany() {
        return this.messageRepo.find({ where: { type: 'message' } });
    }
    async update(idMessage, messageDto) {
        const message = await this.messageRepo.findOne({ where: { idMessage } });
        Object.assign(message, messageDto);
        return await this.messageRepo.save(message);
    }
    async delete(idMessage) {
        const message = await this.messageRepo.findOne({ where: { idMessage } });
        return await this.messageRepo.remove(message);
    }
    async annonce(idClasse) {
        const message = await this.messageRepo.find({
            where: [
                { idClasse: idClasse, type: 'annonce' },
                { idClasse: 0, type: 'annonce' }
            ],
            order: {
                idMessage: 'DESC'
            }
        });
        return message;
    }
    async annonceInfo() {
        try {
            const query = ` 
            SELECT m.idMessage, m.contenu, m.heure, m.date, u.nom , c.nomClasse as idClasse
            FROM message m
            INNER JOIN utilisateur u ON u.idUser = m.idUser
            INNER JOIN classe c ON c.idClasse = m.idClasse where m.type = 'annonce'; `;
            const infoAll = await this.connection.query(query);
            return infoAll;
        }
        catch (erreur) {
            console.log(erreur);
            return { error: `erreur: ${erreur}` };
        }
    }
    async postAnnonceInfo(dto) {
        try {
            const user = await this.userRepo.findOne({ where: { nom: dto.nom, type: 'Admin' } });
            const classe = await this.classeRepo.findOne({ where: { nomClasse: dto.idClasse } });
            const messageDto = {
                'idMessage': dto.idMessage,
                'idCours': 0,
                'contenu': dto.contenu,
                'heure': dto.heure,
                'date': dto.date,
                'type': 'annonce',
                'idUser': user.idUser,
                'idClasse': classe.idClasse,
                'userNom': dto.nom
            };
            const message = this.messageRepo.create(messageDto);
            return await this.messageRepo.save(message);
        }
        catch (erreur) {
            console.log(erreur);
            return { error: `erreur: ${erreur}` };
        }
    }
    async updateAnnonceInfo(id, dto) {
        try {
            const user = await this.userRepo.findOne({ where: { nom: dto.nom, type: 'Admin' } });
            const classe = await this.classeRepo.findOne({ where: { nomClasse: dto.idClasse } });
            console.log(user);
            const messageDto = {
                'idMessage': dto.idMessage,
                'idCours': 0,
                'contenu': dto.contenu,
                'heure': dto.heure,
                'date': dto.date,
                'type': 'annonce',
                'idUser': user.idUser,
                'idClasse': classe.idClasse,
                'userNom': dto.nom
            };
            const messageInfo = await this.messageRepo.findOne({ where: { idMessage: id } });
            Object.assign(messageInfo, messageDto);
            return await this.messageRepo.save(messageInfo);
        }
        catch (erreur) {
            console.log(erreur);
            return { error: `erreur: ${erreur}` };
        }
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_1.InjectRepository)(classe_entity_1.Classe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MessageService);
//# sourceMappingURL=message.service.js.map