import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionComponent } from './pages/question/question.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { IdComponent } from './pages/id/id.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

import { QuestionsPipe } from './systeme/pipes/questions.pipe';
import { QuestionCheckboxComponent } from './pages/question/question-checkbox/question-checkbox.component';
import { QuestionRadioComponent } from './pages/question/question-radio/question-radio.component';
import { QuestionsService } from './systeme/services/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    ResultatsComponent,
    ProfilComponent,
    IdComponent,
    AccueilComponent,
    QuestionsPipe,
    QuestionCheckboxComponent,
    QuestionRadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
