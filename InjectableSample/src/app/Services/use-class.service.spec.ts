import { TestBed } from '@angular/core/testing';

import { UseClassService } from './use-class.service';

describe('UseClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseClassService = TestBed.get(UseClassService);
    expect(service).toBeTruthy();
  });
});
