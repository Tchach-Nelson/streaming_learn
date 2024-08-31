import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'disciplineetudiant'})
export class Disciplineetudiant{

    @PrimaryGeneratedColumn()
    iddisciplineetudiant:number;

    @Column()
    idUser: number;

    @Column()
    matricule:number;

    @Column()
    idDiscipline:number;

    @Column()
    motif: string;
}