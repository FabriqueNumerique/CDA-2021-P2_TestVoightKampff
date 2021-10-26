import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnexionService } from '../services/connexion.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  entetes:any;
  constructor(private connec:ConnexionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Requête interceptée", request);
    // On vérifie qu'un token existe. Si il existe, on génère un nouvel entête
    if(this.connec.token){
      this.entetes = {
        headers: new HttpHeaders({
          'Authorization' : 'Bearer ' + this.connec.token
        })
      }
      const authReq = request.clone(this.entetes);
      return next.handle(authReq);
    }else{
      // On renvoie la requête d'origine
      return next.handle(request);
    }
  }
}
