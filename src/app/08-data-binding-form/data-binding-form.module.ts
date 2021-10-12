import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingFormComponent } from './data-binding-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataBindingFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    DataBindingFormComponent
  ]
})
export class DataBindingFormModule { }
