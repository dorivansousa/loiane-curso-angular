import { TestBed } from '@angular/core/testing';

import { CoursesDepedencyInjectionService } from './courses-depedency-injection.service';

describe('CoursesDepedencyInjectionService', () => {
  let service: CoursesDepedencyInjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesDepedencyInjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
