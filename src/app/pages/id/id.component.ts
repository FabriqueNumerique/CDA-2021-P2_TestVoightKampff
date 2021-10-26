import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/systeme/services/auth.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  // id:any = {nawal:'', francisco:''};
  /** Nous créons un pointeur vers AuthService pour accéder à ses propriétés et méthodes publiques */
  constructor(public authServ:AuthService) { }

  ngOnInit(): void {
  }
  /** Méthode juste pour l'exemple */
  showMeBaby(){
    console.log('Affichage des données issues du service Auth', this.authServ.auth);
  }
}
