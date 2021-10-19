import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundYellowDirective } from './background-yellow.directive';
import { HighlightmouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';
import { NgMyElseDirective } from './ng-my-else.directive';



@NgModule({
  declarations: [
    BackgroundYellowDirective,
    HighlightmouseDirective,
    HighlightDirective,
    NgMyElseDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundYellowDirective,
    HighlightmouseDirective,
    HighlightDirective,
    NgMyElseDirective
  ]
})
export class SharedModule { }
