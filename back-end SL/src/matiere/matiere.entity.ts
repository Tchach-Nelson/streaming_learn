import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'matiere'})
export class Matiere{
    @PrimaryGeneratedColumn()
    idMatiere: number;

    @Column()
    nom:string;

    @Column()
    credit:number;
    
    @Column()
    semestre:string;
    
    @Column()
    note:number;
    
    @Column()
    dateNote:string;

    @Column()
    decision:string;

}