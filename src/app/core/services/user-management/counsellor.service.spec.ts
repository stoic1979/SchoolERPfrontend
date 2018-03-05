import { TestBed, inject } from '@angular/core/testing';

import { CounsellorService } from './counsellor.service';

describe('CounsellorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounsellorService]
    });
  });

  it('should be created', inject([CounsellorService], (service: CounsellorService) => {
    expect(service).toBeTruthy();
  }));
});
