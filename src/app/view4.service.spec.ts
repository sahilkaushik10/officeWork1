import { TestBed } from '@angular/core/testing';

import { View4Service } from './view4.service';

describe('View4Service', () => {
  let service: View4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
