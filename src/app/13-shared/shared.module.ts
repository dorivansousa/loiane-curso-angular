import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundYellowDirective } from './background-yellow.directive';
import { HighlightmouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    BackgroundYellowDirective,
    HighlightmouseDirective,
    HighlightDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundYellowDirective,
    HighlightmouseDirective,
    HighlightDirective
  ]
})
export class SharedModule { }
