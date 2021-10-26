import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuestion } from '../modeles/iquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  /** Liste des questions loadées en ajax */
  questions:Array<IQuestion> = [];

  constructor(private http:HttpClient) {
    this.getQuestions();
  }
  /** Récupérer des données externes en Ajax avec HttpClient */
  getQuestions(){
    this.http.get<Array<IQuestion>>('assets/datas/questions.json').subscribe(
      colin => {
        this.questions = colin;
        console.log(this.questions[0]);
      }
    )
  }
}
