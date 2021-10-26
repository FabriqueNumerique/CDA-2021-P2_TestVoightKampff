/** Typage de l'objet Question */
export interface IQuestion {
    id?:number | string;
    question:string;
    type?:string;
    reponse:Array<IReponse>;
}
/** Typage de l'objet Réponsew */
export interface IReponse {
    id?:number | string;
    enonce:string;
    score:number | string;
}
