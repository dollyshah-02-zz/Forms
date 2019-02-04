import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from '../user';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {
  userForm: FormGroup;
  // user: User = new User();
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  gender: FormControl;
  hobbies: FormControl;
  mobileNo:FormControl;
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    console.log("hi");
  }

  languages: Array<string> = [
    'Gujarati',
    'Hindi',
    'English',
    'German'
  ];
  hobbiesArray: Array<string> = [
    "Dancing",
    "Singing",
    "Reading"
  ]

  createForm() {
    this.userForm = new FormGroup(
      {
        name: new FormGroup(
          {
            firstName: this.firstName,
            lastName: this.lastName,
          }
        ),
        gender: this.gender,
        hobbies: this.hobbies,
        email: this.email,
        password: this.password,
        language: this.language,
        mobileNo:this.mobileNo
      }
    );
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.gender = new FormControl('', Validators.required);
    this.hobbies = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[A-Za-z0-9_.]+@[a-zA-Z0-9]+\.(com|org|edu)")
    ]);
    this.language = new FormControl('', Validators.required);
    this.mobileNo=new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ])
  }
  submitData() {
    if (this.userForm.valid) {
      console.log("Form is submitted", this.userForm.value);
      console.log(this.gender.hasError);
      this.userForm.reset();
    }
  }

}
