import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  /** Liste des questions loadées en ajax */
  questions:any = [];

  constructor(private http:HttpClient) {
    this.getQuestions();
  }
  /** Récupérer des données externes en Ajax avec HttpClient */
  getQuestions(){
    this.http.get('assets/datas/questions.json').subscribe(
      thomas => {
        this.questions = thomas;
        console.log(this.questions);
      }
    )
  }
}
