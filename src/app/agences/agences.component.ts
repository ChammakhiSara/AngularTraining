import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {

  addAgencesForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addAgencesForm = new FormGroup({
      
      Name: new FormControl ('', [Validators.compose([Validators.required])]),
      adresse: new FormControl ('', [Validators.required]),
      telephone: new FormControl ('', [Validators.required])
    });
  }
  
  onSubmit(){
    let agences = JSON.parse(localStorage.getItem('agences')) || [];

    let agen = this.addAgencesForm.value;
    agences.push(agen);

    localStorage.setItem('agences', JSON.stringify(agences));
  
  }

}
