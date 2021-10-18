import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyFirstModule } from './02-my-first/my-first.module';
import { CoursesModule } from './04-courses/courses.module';
import { MyFirstAngularCli01Component } from './01-my-first/my-first-angular-cli/my-first-angular-cli.component';
import { MyFirstManually01Component } from './01-my-first/my-first-manually/my-first-manually.component';
import { CoursesTemplateModule } from './05-courses-template/courses-template.module';
import { CoursesDependenyInjectionModule } from './06-courses-dependency-injection/courses-depedency-injection.module';
import { DataBindingComponent } from './07-data-binding/data-binding.component';
import { DataBindingFormModule } from './08-data-binding-form/data-binding-form.module';
import { InputOutputPropertiesModule } from './09-input-output-properties/input-output-properties.module';
import { DiretivasModule } from './10-diretivas/diretivas.module';
import { OperadorElvisComponent } from './11-operadores/operador-elvis.component';
import { NgContentComponent } from './12-ng-content/ng-content.component';
import { BackgroundYellowDirective } from './13-shared/background-yellow.directive';
import { CustomDirectivesModule } from './14-custom-directives/custom-directives.module';
import { SharedModule } from './13-shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstAngularCli01Component,
    MyFirstManually01Component,
    DataBindingComponent,
    OperadorElvisComponent,
    NgContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MyFirstModule,
    CoursesModule,
    CoursesTemplateModule,
    CoursesDependenyInjectionModule,
    FormsModule,
    DataBindingFormModule,
    InputOutputPropertiesModule,
    DiretivasModule,
    SharedModule,
    CustomDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
