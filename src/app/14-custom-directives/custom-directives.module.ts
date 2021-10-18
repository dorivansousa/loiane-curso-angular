import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectivesComponent } from './custom-directives.component';
import { SharedModule } from '../13-shared/shared.module';



@NgModule({
  declarations: [
    CustomDirectivesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    CustomDirectivesComponent
  ]
})
export class CustomDirectivesModule { }
