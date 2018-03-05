import { TestBed, inject } from '@angular/core/testing';

import { PrincipalService } from './principal.service';

describe('PrincipalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrincipalService]
    });
  });

  it('should be created', inject([PrincipalService], (service: PrincipalService) => {
    expect(service).toBeTruthy();
  }));
});
