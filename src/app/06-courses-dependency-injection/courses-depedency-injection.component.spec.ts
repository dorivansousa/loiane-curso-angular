import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDependenyInjectionComponent } from './courses-depedency-injection.component';

describe('CoursesDependenyInjectionComponent', () => {
  let component: CoursesDependenyInjectionComponent;
  let fixture: ComponentFixture<CoursesDependenyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDependenyInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDependenyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
