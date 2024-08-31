import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'scolarite'})
export class Scolarite{
    @PrimaryGeneratedColumn()
    idScolarite: number;
    
    @Column()
    semestre:string;

    @Column()
    montant:number;

    @Column()
    reste:number;

    @Column()
    bourse:number;

    @Column()
    dateInscription:string;

    @Column()
    rabais:number;

    @Column()
    moratoire:string;
}