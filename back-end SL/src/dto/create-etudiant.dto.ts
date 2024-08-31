export class CreateEtudiantDto{

    matricule?:number;
    idUser: number;
    nom: string;
    pass: string;
    date: string;
    email: string;
    sexe: string;
    type: string;
    telephone: number;
    status: number;
    idClasse?:number;
    idScolarite:number;
    lettreMotivation: Buffer;
    bourse: Buffer;
    specialite: string;
    niveau:number;
    diplomeNature: string;
    diplome: Buffer;
    bulletin: Buffer;
    redoublant: string;
}