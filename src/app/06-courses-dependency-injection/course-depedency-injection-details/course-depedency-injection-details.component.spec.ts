import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDependenyInjectionDetailsComponent } from './course-depedency-injection-details.component';

describe('CourseTemplateDetailsComponent', () => {
  let component: CourseDependenyInjectionDetailsComponent;
  let fixture: ComponentFixture<CourseDependenyInjectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDependenyInjectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDependenyInjectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
