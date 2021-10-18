import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectivesComponent } from './custom-directives.component';
import { BackgroundYellowDirective } from '../13-shared/background-yellow.directive';



@NgModule({
  declarations: [
    CustomDirectivesComponent,
    BackgroundYellowDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomDirectivesComponent
  ]
})
export class CustomDirectivesModule { }
