import { Component, OnInit, Input } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.css']
})
export class QuestionCheckboxComponent extends QuestionComponent implements OnInit {
  
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.q);
  }

}
