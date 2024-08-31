import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'discipline'})
export class Discipline{
    @PrimaryGeneratedColumn()
    idDiscipline: number;

    @Column()
    type:string;

    @Column()
    valeur:string;

    @Column()
    motif:string;
}