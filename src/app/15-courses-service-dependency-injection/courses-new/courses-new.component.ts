import { Component, OnInit } from '@angular/core';
import { CoursesServiceDependencyInjection } from '../courses-dependency-injection.service';

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.css']
})
export class CoursesNewComponent implements OnInit {

  courses: String[] = [];

  constructor(private _coursesService: CoursesServiceDependencyInjection) { }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses()
  }

}
