import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'programmematiere'})
export class Programmematiere{
    @PrimaryGeneratedColumn()
    idMatiere: number;

    @Column()
    idProgramme:number;

}