import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-exempl-form-array',
  templateUrl: './exempl-form-array.component.html',
  styleUrls: ['./exempl-form-array.component.css']
})
export class ExemplFormArrayComponent implements OnInit {

  skillsForm: FormGroup;
  submitted = false;

  constructor() {
    this.skillsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      skills: new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return new FormGroup({
      skill: new FormControl('', [Validators.required]),
      exp: new FormControl('', [Validators.required])
    })
  }

  addSkills() {
    this.skills.push(this.newSkill());  
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
    this.submitted = true;
    if (this.skillsForm.invalid) {
      return;
    }
    else {
      let interns = JSON.parse(localStorage.getItem('interns')) || [];

      let trainee = this.skillsForm.value;
      interns.push(trainee);

      localStorage.setItem('interns', JSON.stringify(interns));
  }
}
}
