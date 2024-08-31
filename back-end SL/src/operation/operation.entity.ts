import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'operation'})
export class Operation{
    @PrimaryGeneratedColumn()
    idOp: number;

    @Column()
    datePaiement:string;

    @Column()
    type:string;
    
    @Column()
    montant:number;

    @Column()
    idScolarite: number;

}