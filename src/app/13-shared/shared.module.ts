import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundYellowDirective } from './background-yellow.directive';
import { HighlightmouseDirective } from './highlight-mouse.directive';



@NgModule({
  declarations: [
    BackgroundYellowDirective,
    HighlightmouseDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundYellowDirective,
    HighlightmouseDirective
  ]
})
export class SharedModule { }
