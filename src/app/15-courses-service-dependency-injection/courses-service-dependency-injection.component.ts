import { Component, OnInit } from '@angular/core';
import { CoursesServiceDependencyInjection } from './courses-dependency-injection.service';

@Component({
  selector: 'app-courses-service-dependency-injection',
  templateUrl: './courses-service-dependency-injection.component.html',
  styleUrls: ['./courses-service-dependency-injection.component.css']
})
export class CoursesServiceDependencyInjectionComponent implements OnInit {

  courses: String[] = [];
    
  constructor(private _coursesService: CoursesServiceDependencyInjection) { 
  }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
  }

}
