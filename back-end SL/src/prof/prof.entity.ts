import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'professeur'})
export class Prof{
    @PrimaryGeneratedColumn()
    idProf: number;

    @Column()
    idUser:number;

    @Column()
    specialite:string;
    
    @Column()
    poste:string;

    @Column()
    salaire:number;
}