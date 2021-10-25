import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  /** Valeur récupérée dans le HTML à partir de la liste des questions */
  @Input() q:any; // Récupérer les informations sur la question
  
  constructor() { }
}
