import { TestBed } from '@angular/core/testing';

import { UseValueService } from './use-value.service';

describe('UseValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseValueService = TestBed.get(UseValueService);
    expect(service).toBeTruthy();
  });
});
