import { Component } from '@angular/core';
import { CoursesDepedencyInjectionService} from './courses-depedency-injection.service'

@Component({
  selector: 'app-courses-depedency-injection',
  templateUrl: './courses-depedency-injection.component.html',
  styleUrls: ['./courses-depedency-injection.component.css']
})
export class CoursesDependenyInjectionComponent {

  nomePortal: String;
  courses: string [];
  //private no constructor faz a declacao pra gente
  //cousesService: CoursesDepedencyInjectionService 

  constructor(private coursesService: CoursesDepedencyInjectionService) {
    this.nomePortal = "http://loiane.com"
    
    // *ngFor
    // for (let i = 0; i < this.courses.length - 1; i++) {
      // let c = this.courses[i];
    // }

    //fazendo a instancia manualmente - resolvido pela injecao de dependencia
    // var coursesService = new CoursesDepedencyInjectionService();

    this.courses = coursesService.getCourses();
  }

}
