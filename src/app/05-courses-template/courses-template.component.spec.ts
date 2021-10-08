import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTemplateComponent } from './courses-template.component';

describe('CoursesTemplateComponent', () => {
  let component: CoursesTemplateComponent;
  let fixture: ComponentFixture<CoursesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
