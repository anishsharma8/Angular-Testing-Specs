import { TestBed } from '@angular/core/testing';

import { UnitTestService } from './unit-test.service';

describe('UnitTestService', () => {
  let service: UnitTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
