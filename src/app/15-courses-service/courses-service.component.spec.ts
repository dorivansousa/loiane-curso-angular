import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesServiceComponent } from './courses-service.component';

describe('CoursesServiceComponent', () => {
  let component: CoursesServiceComponent;
  let fixture: ComponentFixture<CoursesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
