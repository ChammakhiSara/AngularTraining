import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { AgencesComponent } from './agences/agences.component';
import { ListeAgencesComponent } from './liste-agences/liste-agences.component';
import { AjoutModifAgencesComponent } from './ajout-modif-agences/ajout-modif-agences.component';
import { P404Component } from './p404/p404.component';
import { ModifUsersComponent } from './modif-users/modif-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UsersComponent,
    ListeUsersComponent,
    AgencesComponent,
    ListeAgencesComponent,
    AjoutModifAgencesComponent,
    P404Component,
    ModifUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
