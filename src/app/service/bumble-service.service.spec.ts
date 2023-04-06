import { TestBed } from '@angular/core/testing';

import { BumbleServiceService } from './bumble-service.service';

describe('BumbleServiceService', () => {
  let service: BumbleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BumbleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
