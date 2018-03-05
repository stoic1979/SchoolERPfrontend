import { TestBed, inject } from '@angular/core/testing';

import { StandardService } from './standard.service';

describe('StandardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardService]
    });
  });

  it('should be created', inject([StandardService], (service: StandardService) => {
    expect(service).toBeTruthy();
  }));
});
