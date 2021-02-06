import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  addUsersForm: FormGroup;
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addUsersForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addUsersForm.invalid) {
      return;
    }
    else {
      let users = JSON.parse(localStorage.getItem('users')) || [];

      let utilisateur = this.addUsersForm.value;
      users.push(utilisateur);

      localStorage.setItem('users', JSON.stringify(users));

      /*definir le chemain souhaiter lorsqu'on click submit avec bien sur constructor(private router:Router) {}*/
      this.router.navigateByUrl('liste-users');
    }

  }

}
