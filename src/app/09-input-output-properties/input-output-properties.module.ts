import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputPropertiesComponent } from './input-output-properties.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InputPropertyComponent } from './input-property/input-property.component';



@NgModule({
  declarations: [
    InputOutputPropertiesComponent,
    OutputPropertyComponent,
    InputPropertyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputOutputPropertiesComponent
  ]
})
export class InputOutputPropertiesModule { }
