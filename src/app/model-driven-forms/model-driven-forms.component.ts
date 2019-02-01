import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from '../user';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  languages: Array<string> = [
    'Gujarati',
    'Hindi',
    'English',
    'German'
  ];

  createForm() {
    this.userForm = new FormGroup(
      {
        name: new FormGroup(
          {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
          }
        ),
        email: this.user.email,
        password: this.user.password,
        language: this.user.language
      }
    );
  }

  createFormControls() {
    this.user.firstName = new FormControl('', Validators.required);
    this.user.lastName = new FormControl('', Validators.required);
    this.user.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.user.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.user.language = new FormControl('', Validators.required);
  }
  submitData() {
    if (this.userForm.valid) {
      console.log(this.user.firstName)
      console.log("Form is submitted");
      this.userForm.reset();
      console.log(this.userForm.errors)
    }
  }

}
