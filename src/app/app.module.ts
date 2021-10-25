import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionComponent } from './pages/question/question.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { IdComponent } from './pages/id/id.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QuestionsPipe } from './systeme/pipes/questions.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    ResultatsComponent,
    ProfilComponent,
    IdComponent,
    AccueilComponent,
    QuestionsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
