import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { checkPasswords } from '../utils/confirm-password.validator';

@Component({
  selector: 'app-mot-pass-confirm',
  templateUrl: './mot-pass-confirm.component.html',
  styleUrls: ['./mot-pass-confirm.component.css']
})
export class MotPassConfirmComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor() { }
  
  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: checkPasswords
    });
  }
  onSubmit() { 
    console.log(this.registerForm.hasError('notSame'));
    
    this.submitted = true;
    console.log(this.registerForm.value);
    
  }

}
