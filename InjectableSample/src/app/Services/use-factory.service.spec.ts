import { TestBed } from '@angular/core/testing';

import { UseFactoryService } from './use-factory.service';

describe('UseFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseFactoryService = TestBed.get(UseFactoryService);
    expect(service).toBeTruthy();
  });
});
