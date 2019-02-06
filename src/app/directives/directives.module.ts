import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { EmployeePhotoDirective } from './employee-photo.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AttributeDirectiveComponent, EmployeePhotoDirective],
  exports:[AttributeDirectiveComponent, EmployeePhotoDirective]
})
export class DirectivesModule { }
