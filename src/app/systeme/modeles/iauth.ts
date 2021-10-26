export interface IAuth {
    identifiant:string | number;
    mdp:string | number;
    nom?:string | number;
    prenom?:string;
    grade:number;
    token?:string;
}
