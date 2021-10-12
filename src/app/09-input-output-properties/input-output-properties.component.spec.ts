import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPropertiesComponent } from './input-output-properties.component';

describe('InputOutputPropertiesComponent', () => {
  let component: InputOutputPropertiesComponent;
  let fixture: ComponentFixture<InputOutputPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
