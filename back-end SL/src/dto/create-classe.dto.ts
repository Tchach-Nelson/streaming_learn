export class CreateClasseDto{

    idClasse?:number;
    nomClasse: string;
    effectif?:number;
    chefId: number;
    sousChefId: number;
}