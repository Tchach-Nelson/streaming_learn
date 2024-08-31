import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'programme'})
export class Programme{
    @PrimaryGeneratedColumn()
    idProgramme: number;

    @Column()
    idClasse:number;

    @Column()
    heure:string;
    
    @Column()
    date:string;

    @Column()
    idNomProf:string;

}