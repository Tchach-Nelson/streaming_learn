import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'utilisateur'})
export class User{
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    nom:string;

    @Column()
    pass:string;
    
    @Column()
    date:string;

    @Column()
    email:string;

    @Column()
    sexe:string;

    @Column()
    type:string;

    @Column()
    telephone:number;

    @Column()
    status:number;

}