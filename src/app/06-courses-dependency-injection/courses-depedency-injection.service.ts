import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //informando nao precisa configurar no Module
})
export class CoursesDepedencyInjectionService {

  constructor() {  }

  getCourses() {
    return ['java', 'CShap', 'JavaScript', 'Angular']
  }
}
