import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasListcComponent } from './components/noticias-listc/noticias-listc.component';
import { NoticiasUpsertComponent} from './components/noticias-upsert/noticias-upsert.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PrivateComponent } from './components/private/private.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'private', component: PrivateComponent, children:[
      { path: 'noticias-list', component: NoticiasListcComponent },
      { path: 'noticias-edit/:id', component: NoticiasUpsertComponent },
      { path: 'noticias-insert', component: NoticiasUpsertComponent },
  ] },
  { path: '**',redirectTo: "private/noticias-list" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
