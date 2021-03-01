import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-first-use-service',
  templateUrl: './first-use-service.component.html',
  styleUrls: ['./first-use-service.component.css']
})
export class FirstUseServiceComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  add() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    else {
      this.todoService.addTODO(this.myForm.value);
    }
  }

  edit(){

  }

  delete(index){
      this.todoService.deleteTODO(index)
  }

  


}
