import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'noteetu'})
export class Note{

    @PrimaryGeneratedColumn()
    idNote: number;

    @Column()
    idUser: number;

    @Column()
    idMatiere:number;

    @Column()
    note:string;
    
    @Column()
    date:string;
    
    @Column()
    semestre:string;

    @Column()
    decision:string;

}