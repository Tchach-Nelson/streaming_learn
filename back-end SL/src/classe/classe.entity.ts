import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'classe'})
export class Classe{
    @PrimaryGeneratedColumn()
    idClasse: number;

    @Column()
    nomClasse:string;

    @Column()
    effectif:number;
    
    @Column()
    chefId:number;

    @Column()
    sousChefId:number;

}