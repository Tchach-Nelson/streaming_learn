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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const note_entity_1 = require("./note.entity");
const typeorm_2 = require("typeorm");
const matiere_entity_1 = require("../matiere/matiere.entity");
let NoteService = class NoteService {
    constructor(noteRepo, connection, matiereRepo) {
        this.noteRepo = noteRepo;
        this.connection = connection;
        this.matiereRepo = matiereRepo;
    }
    async create(messageDto) {
        const message = this.noteRepo.create(messageDto);
        return await this.noteRepo.save(message);
    }
    findMany() {
        return this.noteRepo.find();
    }
    async update(idNote, messageDto) {
        const message = await this.noteRepo.findOne({ where: { idNote } });
        Object.assign(message, messageDto);
        return await this.noteRepo.save(message);
    }
    async delete(idNote) {
        const message = await this.noteRepo.findOne({ where: { idNote } });
        return await this.noteRepo.remove(message);
    }
    async info(idUser) {
        const notesUser = await this.noteRepo.find({ where: { idUser } });
        const noteInfos = await Promise.all(notesUser.map(async (noteUse) => {
            const matiere = await this.matiereRepo.findOne({ where: { idMatiere: noteUse.idMatiere } });
            console.log('a');
            return ({
                'nom': matiere.nom,
                'credit': matiere.credit,
                'note': noteUse.note,
                'decision': noteUse.decision
            });
        }));
        console.log(noteInfos);
        return noteInfos;
    }
    async infoNote() {
        try {
            const query = ` 
            SELECT n.idNote, u.nom as idUser, m.nom as idMatiere, n.note, n.date, n.semestre, n.decision        
            FROM noteetu n
            INNER JOIN utilisateur u ON u.idUser = n.idUser
            INNER JOIN matiere m ON m.idMatiere = n.idMatiere ; `;
            const infoAll = await this.connection.query(query);
            return infoAll;
        }
        catch (error) {
            console.log(error);
            return ({ erreur: `erreur : ${error}` });
        }
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __param(2, (0, typeorm_1.InjectRepository)(matiere_entity_1.Matiere)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        typeorm_2.Repository])
], NoteService);
//# sourceMappingURL=note.service.js.map