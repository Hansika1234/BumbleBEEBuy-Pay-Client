import { TestBed } from '@angular/core/testing';

import { PaymnetServiceService } from './paymnet-service.service';

describe('PaymnetServiceService', () => {
  let service: PaymnetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymnetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
