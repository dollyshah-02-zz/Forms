import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenFormsComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
