import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-service',
  templateUrl: './courses-service.component.html',
  styleUrls: ['./courses-service.component.css']
})
export class CoursesServiceComponent implements OnInit {

  courses: String[] = [];
  coursesService: CoursesService;
  
  constructor() { 
    this.coursesService = new CoursesService();
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

}
