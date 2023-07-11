import { TestBed } from '@angular/core/testing';

import { View6Service } from './view6.service';

describe('View6Service', () => {
  let service: View6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
