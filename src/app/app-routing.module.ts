import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { IdComponent } from './pages/id/id.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { AuthGuard } from './systeme/securite/auth.guard';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"questions", component:QuestionsComponent, children:[
    {path:":id", component:QuestionsComponent},
    {path:"resultats", component:ResultatsComponent}
  ], canActivate:[AuthGuard]},
  {path:"admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard]},
  {path:"id", component:IdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
