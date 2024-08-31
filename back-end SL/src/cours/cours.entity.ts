import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cours'})
export class Cours{
    @PrimaryGeneratedColumn()
    idCours: number;

    @Column()
    idProf:number;

    @Column()
    idMatiere:number;
    
    @Column()
    date:string;

    @Column()
    uuid:string;

    @Column()
    idClasse:number;

    @Column()
    duree:number;

}