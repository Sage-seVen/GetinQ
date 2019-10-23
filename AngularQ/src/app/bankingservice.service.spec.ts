import { TestBed } from '@angular/core/testing';

import { BankingserviceService } from './bankingservice.service';

describe('BankingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankingserviceService = TestBed.get(BankingserviceService);
    expect(service).toBeTruthy();
  });
});
