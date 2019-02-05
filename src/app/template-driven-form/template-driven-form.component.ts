import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }
  @ViewChild('f') form;
  @ViewChild('email') e;

  ngOnInit() {
   
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
  user: User = new User();
  onSubmit() {
    console.log(this.user);
    console.log("Email:", this.e.value);
    this.form.reset();
  }
  fname(value) {
    console.log(value);
  }
}
