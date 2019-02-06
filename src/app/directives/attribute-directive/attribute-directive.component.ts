import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent {
  empId: number;
  image: string;
  imgSource = "/assets/employee-images/"
  color: string;
  constructor() { }
  employees = [
    
    { id: 1, name: "Dolly Shah", img: this.imgSource + "employee1.jpeg" },
    { id: 2, name: "Khushbu Shah", img: this.imgSource + "employee2.jpeg" },
    { id: 3, name: "Aakruti Shah", img: this.imgSource + "employee3.jpeg" }
  ]
  getId(i, img) {
    this.empId = i;
    this.image = img;
    // console.log(this.employees.length)
  }
}
