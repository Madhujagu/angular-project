import { TestBed } from '@angular/core/testing';

import { NatixisService } from './natixis.service';

describe('NatixisService', () => {
  let service: NatixisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatixisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
