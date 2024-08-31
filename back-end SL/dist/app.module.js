"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
const admin_module_1 = require("./admin/admin.module");
const admin_entity_1 = require("./admin/admin.entity");
const prof_module_1 = require("./prof/prof.module");
const prof_entity_1 = require("./prof/prof.entity");
const etudiant_module_1 = require("./etudiant/etudiant.module");
const etudiant_entity_1 = require("./etudiant/etudiant.entity");
const message_module_1 = require("./message/message.module");
const message_entity_1 = require("./message/message.entity");
const classe_module_1 = require("./classe/classe.module");
const classe_entity_1 = require("./classe/classe.entity");
const cours_module_1 = require("./cours/cours.module");
const cours_entity_1 = require("./cours/cours.entity");
const discipline_module_1 = require("./discipline/discipline.module");
const discipline_entity_1 = require("./discipline/discipline.entity");
const disciplineetudiant_module_1 = require("./disciplineetudiant/disciplineetudiant.module");
const disciplineetudiant_entity_1 = require("./disciplineetudiant/disciplineetudiant.entity");
const matiere_module_1 = require("./matiere/matiere.module");
const matiere_entity_1 = require("./matiere/matiere.entity");
const operation_module_1 = require("./operation/operation.module");
const operation_entity_1 = require("./operation/operation.entity");
const participation_module_1 = require("./participation/participation.module");
const participation_entity_1 = require("./participation/participation.entity");
const programme_module_1 = require("./programme/programme.module");
const programmematiere_module_1 = require("./programmematiere/programmematiere.module");
const programmematiere_entity_1 = require("./programmematiere/programmematiere.entity");
const scolarite_module_1 = require("./scolarite/scolarite.module");
const scolarite_entity_1 = require("./scolarite/scolarite.entity");
const programme_entity_1 = require("./programme/programme.entity");
const note_module_1 = require("./note/note.module");
const note_entity_1 = require("./note/note.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'streaminglearn',
                entities: [user_entity_1.User, admin_entity_1.Admin, prof_entity_1.Prof, etudiant_entity_1.Etudiant, message_entity_1.Message, classe_entity_1.Classe, cours_entity_1.Cours, discipline_entity_1.Discipline, disciplineetudiant_entity_1.Disciplineetudiant, matiere_entity_1.Matiere, operation_entity_1.Operation, participation_entity_1.Participation, programme_entity_1.Programme, programmematiere_entity_1.Programmematiere, scolarite_entity_1.Scolarite, note_entity_1.Note],
                synchronize: false
            }),
            user_module_1.UserModule,
            admin_module_1.AdminModule,
            prof_module_1.ProfModule,
            etudiant_module_1.EtudiantModule,
            message_module_1.MessageModule,
            classe_module_1.ClasseModule,
            cours_module_1.CoursModule,
            discipline_module_1.DisciplineModule,
            disciplineetudiant_module_1.DisciplineetudiantModule,
            matiere_module_1.MatiereModule,
            operation_module_1.OperationModule,
            participation_module_1.ParticipationModule,
            programme_module_1.ProgrammeModule,
            programmematiere_module_1.ProgrammematiereModule,
            scolarite_module_1.ScolariteModule,
            note_module_1.NoteModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map