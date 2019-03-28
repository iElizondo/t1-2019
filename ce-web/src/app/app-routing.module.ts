import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasListcComponent } from './components/noticias-listc/noticias-listc.component';
import { NoticiasUpsertComponent} from './components/noticias-upsert/noticias-upsert.component';


const routes: Routes = [
  { path: 'noticias/list', component:  NoticiasListcComponent},
  { path: 'noticias-edit/:id', component:  NoticiasUpsertComponent},
  { path: 'noticias-insert', component:  NoticiasUpsertComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'noticias-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
