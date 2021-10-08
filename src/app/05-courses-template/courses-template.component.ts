import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-template',
  templateUrl: './courses-template.component.html',
  styleUrls: ['./courses-template.component.css']
})
export class CoursesTemplateComponent {

  nomePortal: String;
  courses: string [];

  constructor() {
    this.nomePortal = "http://loiane.com"
    this.courses = ['java', 'CShap', 'JavaScript', 'Angular']

    // *ngFor
    // for (let i = 0; i < this.courses.length - 1; i++) {
      // let c = this.courses[i];
    // }
  }

  ngOnInit() {
    
  }

}
