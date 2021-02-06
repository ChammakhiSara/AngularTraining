import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  users: any;
  index: number; 

  constructor() { }

  ngOnInit(): void {

  this.users = JSON.parse(localStorage.getItem('users')) || [];  

  }
  deleteUser(index){
 
  this.users.splice(index, 1);
	localStorage.setItem('users', JSON.stringify(this.users));
	location.reload();
  }
}
