import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTemplateDetailsComponent } from './course-template-details.component';

describe('CourseTemplateDetailsComponent', () => {
  let component: CourseTemplateDetailsComponent;
  let fixture: ComponentFixture<CourseTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTemplateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
