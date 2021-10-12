import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingFormComponent } from './data-binding-form.component';

describe('DataBindingFormComponent', () => {
  let component: DataBindingFormComponent;
  let fixture: ComponentFixture<DataBindingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
