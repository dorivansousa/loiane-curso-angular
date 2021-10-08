import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyFirstModule } from './02-my-first/my-first.module';
import { CoursesModule } from './04-courses/courses.module';
import { MyFirstAngularCli01Component } from './01-my-first/my-first-angular-cli/my-first-angular-cli.component';
import { MyFirstManually01Component } from './01-my-first/my-first-manually/my-first-manually.component';
import { CoursesTemplateModule } from './05-courses-template/courses-template.module';
import { CoursesDependenyInjectionModule } from './06-courses-dependency-injection/courses-depedency-injection.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstAngularCli01Component,
    MyFirstManually01Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MyFirstModule,
    CoursesModule,
    CoursesTemplateModule,
    CoursesDependenyInjectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
