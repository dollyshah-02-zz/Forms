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

  ngOnInit() {
  }
  languages: Array<string> = [
    'Gujarati',
    'Hindi',
    'English',
    'German'
  ];
  user:User=new User();
  onSubmit(){
    console.log(this.user);
    // this.user=new User();
    this.form.reset();
  }

}
