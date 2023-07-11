import { TestBed } from '@angular/core/testing';

import { AppliedLeaveService } from './applied-leave.service';

describe('AppliedLeaveService', () => {
  let service: AppliedLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppliedLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
