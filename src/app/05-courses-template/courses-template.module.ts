import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesTemplateComponent } from './courses-template.component';
import { CourseTemplateDetailsComponent } from './course-template-details/course-template-details.component';



@NgModule({
  declarations: [
    CoursesTemplateComponent,
    CourseTemplateDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CoursesTemplateComponent,
  ]
})
export class CoursesTemplateModule { }
