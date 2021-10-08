import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstManually02Component } from './my-first-manually/my-first-manually.component';
import { MyFirstAngularCli02Component } from './my-first-angular-cli/my-first-angular-cli.component';

@NgModule({
  declarations: [
    MyFirstManually02Component,
    MyFirstAngularCli02Component,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyFirstManually02Component,
    MyFirstAngularCli02Component,    
  ]
})
export class MyFirstModule { }
