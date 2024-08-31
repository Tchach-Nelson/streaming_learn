import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'message'})
export class Message{
    @PrimaryGeneratedColumn()
    idMessage: number;

    @Column()
    idCours:number;

    @Column()
    contenu:string;
    
    @Column()
    heure:string;
    
    @Column()
    date:string;

    @Column()
    type:string;

    @Column()
    idUser:number;

    @Column()
    idClasse: number;

    @Column()
    userNom: string;
}