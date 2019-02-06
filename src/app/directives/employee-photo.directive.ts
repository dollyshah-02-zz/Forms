import { Directive, ElementRef, HostListener, Input, OnChanges, HostBinding, OnInit } from '@angular/core';
enum Employees {
  OTHER = "assets/employee-images/other.jpg"
};
@Directive({
  selector: '[appEmployeePhoto]'
})
export class EmployeePhotoDirective implements OnChanges, OnInit {

  constructor(private el: ElementRef) {
  }
  @Input('empId') empId: number;
  @Input('empImg') empImg: string;
  @Input("empArray") empArray;
  @HostBinding('src') imageSource;
  ngOnChanges() {
    this.imageSource = this.changeEmployeePhoto(this.empId);
  }
  ngOnInit() {
    this.imageSource = Employees.OTHER;
  }
  changeEmployeePhoto(id) {
    if (this.empId == id) {
      return this.empImg;
    }
  }


}