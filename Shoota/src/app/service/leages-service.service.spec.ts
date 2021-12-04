import { TestBed } from '@angular/core/testing';

import { LeagesServiceService } from './leages-service.service';

describe('LeagesServiceService', () => {
  let service: LeagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
