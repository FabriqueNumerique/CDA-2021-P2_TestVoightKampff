import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../systeme/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  /**
   * 
   * @param questServ Pointeur vers le service avec des questions dedans
   */
  constructor(public questServ:QuestionsService) { }

  ngOnInit(): void {
  }

}
