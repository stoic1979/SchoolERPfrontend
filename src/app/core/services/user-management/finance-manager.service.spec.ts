import { TestBed, inject } from '@angular/core/testing';

import { FinanceManagerService } from './finance-manager.service';

describe('FinanceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinanceManagerService]
    });
  });

  it('should be created', inject([FinanceManagerService], (service: FinanceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
