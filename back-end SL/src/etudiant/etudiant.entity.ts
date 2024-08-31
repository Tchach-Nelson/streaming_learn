import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'etudiant'})
export class Etudiant{
    @PrimaryGeneratedColumn()
    matricule: number;

    @Column()
    idUser: number;

    // @Column()
    // nom:string;

    // @Column()
    // pass:string;
    
    // @Column()
    // date:string;

    // @Column()
    // email:string;

    // @Column()
    // sexe:string;

    // @Column()
    // type:string;

    // @Column()
    // telephone:number;

    // @Column()
    // status:number;

    ///////////////////////////////


    @Column()
    idClasse:number;

    @Column()
    idScolarite:number;

    @Column()
    lettreMotivation:string;

    @Column()
    bourse:string;

    @Column()
    specialite:string;

    @Column()
    niveau:number;

    @Column()
    diplomeNature:string;

    @Column()
    diplome:string;

    @Column()
    bulletin:string;

    @Column()
    redoublant:string;

}