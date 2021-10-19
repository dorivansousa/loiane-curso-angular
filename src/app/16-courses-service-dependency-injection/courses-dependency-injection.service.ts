import { Injectable } from "@angular/core";

@Injectable()
export class CoursesServiceDependencyInjection {
    getCourses() {
        return ['Java', 'Angular', 'NodeJs']
    }
}