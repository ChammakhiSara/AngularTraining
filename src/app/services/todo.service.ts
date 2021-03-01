import { Injectable } from '@angular/core';
import { UsersComponent } from '../users/users.component';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  addTODO(data)
  {

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));

  }

  list()
  {

  }

  deleteTODO(i){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(i, 1);
    localStorage.setItem('users', JSON.stringify(users));

  }

  apdateTODO(i, newData){

  }

}
