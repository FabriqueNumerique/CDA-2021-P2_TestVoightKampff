import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ConnexionService } from '../services/connexion.service';

@Injectable()
export class Auth401Interceptor implements HttpInterceptor {

  constructor(private connec:ConnexionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      // Filtre sur la requête qu'on vient de recevoir pour extraire des données
      catchError(
        // Si une erreur s'est produite
        faute => {
          if(faute instanceof HttpErrorResponse && faute.status == 401){
            // On déconnecte tout le monde
            this.connec.token = '';
            this.connec.connecté = 0;
          }
          return Observable.throw(faute);
        }
      )
    );
  }
}
