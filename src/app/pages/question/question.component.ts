import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() q:any; // La propriété Q est injectable depuis l'extérieur
  
  constructor() {
    console.log(this.q);
  }

  ngOnInit(): void {
  }

}
