import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgIf } from './diretiva.ngif/diretiva-ngif.component';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgswitchComponent } from './diretiva.ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';



@NgModule({
  declarations: [
    DiretivaNgIf,
    DiretivasComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiretivasComponent,
  ]
})
export class DiretivasModule { }
