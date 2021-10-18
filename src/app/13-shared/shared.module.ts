import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundYellowDirective } from './background-yellow.directive';



@NgModule({
  declarations: [
    BackgroundYellowDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundYellowDirective
  ]
})
export class SharedModule { }
