import { TestBed } from '@angular/core/testing';

import { UseExistingService } from './use-existing.service';

describe('UseExistingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseExistingService = TestBed.get(UseExistingService);
    expect(service).toBeTruthy();
  });
});
