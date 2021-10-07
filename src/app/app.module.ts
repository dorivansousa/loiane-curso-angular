import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyFirstModule } from './02-my-first/my-first.module';
import { CoursesModule } from './04-courses/courses.module';
import { MyFirstAngularCliComponent01 } from './01-my-first/my-first-angular-cli/my-first-angular-cli.component';
import { MyFirstManuallyComponent01 } from './01-my-first/my-first-manually/my-first-manually.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstAngularCliComponent01,
    MyFirstManuallyComponent01,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MyFirstModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
