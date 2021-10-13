import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgIf } from './diretiva-ngif.component';

describe('DiretivaNgIf', () => {
  let component: DiretivaNgIf;
  let fixture: ComponentFixture<DiretivaNgIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgIf ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
