import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstManuallyComponent02 } from './my-first-manually/my-first-manually.component';
import { MyFirstAngularCliComponent02 } from './my-first-angular-cli/my-first-angular-cli.component';

@NgModule({
  declarations: [
    MyFirstManuallyComponent02,
    MyFirstAngularCliComponent02,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyFirstManuallyComponent02,
    MyFirstAngularCliComponent02,    
  ]
})
export class MyFirstModule { }
