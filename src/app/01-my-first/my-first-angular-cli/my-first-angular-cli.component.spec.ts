import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstAngularCliComponent01 } from './my-first-angular-cli.component';

describe('MyFirstComponent', () => {
  let component: MyFirstAngularCliComponent01;
  let fixture: ComponentFixture<MyFirstAngularCliComponent01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstAngularCliComponent01 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstAngularCliComponent01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
