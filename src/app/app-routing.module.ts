import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencesComponent } from './agences/agences.component';
import { ExemplFormArrayComponent } from './exempl-form-array/exempl-form-array.component';
import { ListeAgencesComponent } from './liste-agences/liste-agences.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { LoginComponent } from './login/login.component';
import { ModifUsersComponent } from './modif-users/modif-users.component';
import { MotPassConfirmComponent } from './mot-pass-confirm/mot-pass-confirm.component';
import { P404Component } from './p404/p404.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'agences',
    component: AgencesComponent
  },
  {
    path:'liste-users',
    component: ListeUsersComponent
  },
  {
    path:'list-agences',
    component: ListeAgencesComponent
  },
  {
    path:'modif-users/:index',
    component: ModifUsersComponent
  },
  {
    path:'exempl-form-array',
    component: ExemplFormArrayComponent
  },
  {
    path: 'register',
    component: MotPassConfirmComponent
  },
  {
    path:'**',
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
