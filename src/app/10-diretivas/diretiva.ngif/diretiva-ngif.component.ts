import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgIf {

  courses: String[] = ['Angular','Java'];

  showCourses: boolean = false;

  btnShowHideCaption: String = 'Mostrar cursos'  

  constructor() { }

  onBtnShowHideClick() {
    this.showCourses = !this.showCourses;
    // if (!this.showCourses) {
    //   this.btnShowHideCaption = 'Mostrar cursos'
    // }else{ 
    //   this.btnShowHideCaption = 'Ocultar cursos'
    // }
    this.btnShowHideCaption = !this.showCourses ? 'Mostrar cursos' : 'Ocultar cursos';
  }

}
