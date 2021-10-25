import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.css']
})
export class QuestionRadioComponent extends QuestionComponent implements OnInit {
  /**
   * Nom du groupe des boutons radio
   */
  name:string;

  constructor() {
    super();
    this.name = "q"+this.getName();
  }

  ngOnInit(): void {
    console.log(this.q);
  };
  /**
   * Générer un nom aléatoire
   * @returns Nombre compris entre 0 et 40
   */
  getName():number{
    return Math.round(Math.random()*40);
  }
}
