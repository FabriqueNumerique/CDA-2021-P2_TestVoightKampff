import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: any = [{
    id: 0,
    question: "Un collègue de travail vous apprend qu'il a malencontreusement écrasé un petit insecte. Quelle est votre réaction ?",
    type:"checkbox",
    reponses: [
      {
        id: 0,
        enonce: "Vous êtes infiniment triste",
        score: 34
      }, {
        id: 1,
        enonce: "Bof,ce n'était qu'un insecte",
        score: 12.6
      }, {
        id: 2,
        enonce: "Vous compatissez, mais au fond, vous vous en fichez un peu",
        score: 14
      }, {
        id: 3,
        enonce: "Tant mieux ! Vous detestez ces petites bêtes",
        score: 2
      }
    ]
  },
  {
    id: 0,
    question: "Un collègue de travail vous apprend qu'il a malencontreusement écrasé un petit insecte. Quelle est votre réaction ?",
    type:"radio",
    reponses: [
      {
        id: 0,
        enonce: "Vous êtes infiniment triste",
        score: 34
      }, {
        id: 1,
        enonce: "Bof,ce n'était qu'un insecte",
        score: 12.6
      }, {
        id: 2,
        enonce: "Vous compatissez, mais au fond, vous vous en fichez un peu",
        score: 14
      }, {
        id: 3,
        enonce: "Tant mieux ! Vous detestez ces petites bêtes",
        score: 2
      }
    ]
  },
  {
    id: 0,
    question: "Un collègue de travail vous apprend qu'il a malencontreusement écrasé un petit insecte. Quelle est votre réaction ?",
    type:"input",
    reponses: [
      {
        id: 0,
        enonce: "Vous êtes infiniment triste",
        score: 34
      }, {
        id: 1,
        enonce: "Bof,ce n'était qu'un insecte",
        score: 12.6
      }, {
        id: 2,
        enonce: "Vous compatissez, mais au fond, vous vous en fichez un peu",
        score: 14
      }, {
        id: 3,
        enonce: "Tant mieux ! Vous detestez ces petites bêtes",
        score: 2
      }
    ]
  },
  {
    id: 0,
    question: "Un collègue de travail vous apprend qu'il a malencontreusement écrasé un petit insecte. Quelle est votre réaction ?",
    type:"checkbox",
    reponses: [
      {
        id: 0,
        enonce: "Vous êtes infiniment triste",
        score: 34
      }, {
        id: 1,
        enonce: "Bof,ce n'était qu'un insecte",
        score: 12.6
      }, {
        id: 2,
        enonce: "Vous compatissez, mais au fond, vous vous en fichez un peu",
        score: 14
      }, {
        id: 3,
        enonce: "Tant mieux ! Vous detestez ces petites bêtes",
        score: 2
      }
    ]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
