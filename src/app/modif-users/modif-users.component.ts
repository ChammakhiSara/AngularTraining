import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-users',
  templateUrl: './modif-users.component.html',
  styleUrls: ['./modif-users.component.css']
})
export class ModifUsersComponent implements OnInit {

  editUsersForm: FormGroup;
  users: any;
  index: number;
 
  constructor(private route:ActivatedRoute,private router:Router) { } /*j'ajoute ça pour activer le router qui va recuperer l'index from URL ajouter dans la formulaire*/

  ngOnInit(): void {
    this.editUsersForm = new FormGroup({
      firstName: new FormControl ('', [Validators.compose([Validators.required])]),
      lastName: new FormControl ('', [Validators.required]),
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    });
    this.index = this.route.snapshot.params["index"];
    /*console.log(this.index);*/
    
    this.users = JSON.parse(localStorage.getItem('users')) || []; 
    let currentUser= this.users[this.index];
    /*console.log(currentUser);*/
    this.editUsersForm.patchValue(currentUser); 
  
  }
   
  onSubmit(){
    this.users = JSON.parse(localStorage.getItem('users')) || []; 
    let utilisateur = this.editUsersForm.value;
    this.users.splice(this.index, 1, utilisateur);

    localStorage.setItem('users', JSON.stringify(this.users));
    // retourne a la page d'affichage de liste
    this.router.navigateByUrl('liste-users');
  }  
  }



