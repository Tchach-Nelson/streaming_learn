import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'admin'})
export class Admin{
    @PrimaryGeneratedColumn()
    idAmin :number;

    @Column()
    idUser: number;

    @Column()
    privilege:string;
    
    @Column()
    poste:string; 

}