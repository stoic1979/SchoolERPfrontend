import { TestBed, inject } from '@angular/core/testing';

import { TransportManagerService } from './transport-manager.service';

describe('TransportManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportManagerService]
    });
  });

  it('should be created', inject([TransportManagerService], (service: TransportManagerService) => {
    expect(service).toBeTruthy();
  }));
});
