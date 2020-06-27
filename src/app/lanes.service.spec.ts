import { TestBed } from '@angular/core/testing';

import { LaneService } from './laneservice.service';

describe('LaneService', () => {
  let service: LaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
