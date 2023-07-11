import { TestBed } from '@angular/core/testing';

import { View3Service } from './view3.service';

describe('View3Service', () => {
  let service: View3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
