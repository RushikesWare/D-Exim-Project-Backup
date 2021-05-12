import { TestBed } from '@angular/core/testing';

import { GototopServiceService } from './gototop-service.service';

describe('GototopServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GototopServiceService = TestBed.get(GototopServiceService);
    expect(service).toBeTruthy();
  });
});
