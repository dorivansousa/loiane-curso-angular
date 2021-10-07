import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstAngularCliComponent02 } from './my-first-angular-cli.component';

describe('MyFirstComponent', () => {
  let component: MyFirstAngularCliComponent02;
  let fixture: ComponentFixture<MyFirstAngularCliComponent02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstAngularCliComponent02 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstAngularCliComponent02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
