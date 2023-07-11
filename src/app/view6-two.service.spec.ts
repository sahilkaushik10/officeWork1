import { TestBed } from '@angular/core/testing';

import { View6TwoService } from './view6-two.service';

describe('View6TwoService', () => {
  let service: View6TwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View6TwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
