import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from '../modeles/iauth';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth:IAuth = {identifiant:'', mdp:'', grade:0}; // Objet défini en respectant son typage
  nom?:string;
  // auth!:IAuth; // Objet sera forcément présent
  // auth?:IAuth; // Objet rendu optionnel

  constructor(private http:HttpClient, private connec:ConnexionService) { }
  /** Simulation d'une connexion dans le Front */
  getAuth(){
    this.http.get<IAuth>(`assets/datas/ids/${this.auth.identifiant}@${this.auth.mdp}.json`).subscribe(
      data => {
        console.log("Bienvenue étrangééé");
        this.connec.connecté = data.grade;
        this.auth = data;
        // Si un token est présent, je le stocke et le partage
        if(data.token) this.connec.token = data.token;
        this.nom = data.nom as string;
      },
      erreur => {
        console.log("Erreur de connexion, essaye encore");
      }
    );
  }
}
