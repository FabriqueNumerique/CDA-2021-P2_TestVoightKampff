import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connecté:number = 0;
  token!:string; // Token reçu depuis le serveur (en attente)

  constructor() { }
}
