import { TestBed } from '@angular/core/testing';

import { InstallemntServiceService } from './installemnt-service.service';

describe('InstallemntServiceService', () => {
  let service: InstallemntServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallemntServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
