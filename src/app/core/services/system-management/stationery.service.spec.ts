import { TestBed, inject } from '@angular/core/testing';

import { StationeryService } from './stationery.service';

describe('StationeryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationeryService]
    });
  });

  it('should be created', inject([StationeryService], (service: StationeryService) => {
    expect(service).toBeTruthy();
  }));
});
