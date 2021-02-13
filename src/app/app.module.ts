import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { AgencesComponent } from './agences/agences.component';
import { ListeAgencesComponent } from './liste-agences/liste-agences.component';
import { P404Component } from './p404/p404.component';
import { ModifUsersComponent } from './modif-users/modif-users.component';
import { ExemplFormArrayComponent } from './exempl-form-array/exempl-form-array.component';
import { MotPassConfirmComponent } from './mot-pass-confirm/mot-pass-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    ListeUsersComponent,
    AgencesComponent,
    ListeAgencesComponent,
    P404Component,
    ModifUsersComponent,
    ExemplFormArrayComponent,
    MotPassConfirmComponent
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
