import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-agences',
  templateUrl: './liste-agences.component.html',
  styleUrls: ['./liste-agences.component.css']
})
export class ListeAgencesComponent implements OnInit {
  
  agences: [];
  index: number;
  constructor() { }

  ngOnInit(): void {
   this.agences = JSON.parse(localStorage.getItem('agences')) || [];


  }


  deleteAgence(){}

  editAgence(){}

}
