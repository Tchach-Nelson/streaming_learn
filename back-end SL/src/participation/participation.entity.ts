import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'participation'})
export class Participation{
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    matricule:number;

    @Column()
    idCours:number;

    @Column()
    valeur:number;

}