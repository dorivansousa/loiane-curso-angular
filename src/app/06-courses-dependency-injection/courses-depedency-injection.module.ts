import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDependenyInjectionComponent } from './courses-depedency-injection.component';
import { CourseDependenyInjectionDetailsComponent } from './course-depedency-injection-details/course-depedency-injection-details.component';
import { CoursesDepedencyInjectionService } from './courses-depedency-injection.service';



@NgModule({
  declarations: [
    CoursesDependenyInjectionComponent,
    CourseDependenyInjectionDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CoursesDependenyInjectionComponent,
  ],
  // nao precisa mais informar o provider 
  // caso informe o provideIn: "root" no service
  providers:[
    // CoursesDepedencyInjectionService,
  ]
})
export class CoursesDependenyInjectionModule { }
