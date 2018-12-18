import { TestBed } from '@angular/core/testing';

import { UseFactoryWithDependenciesService } from './use-factory-with-dependencies.service';

describe('UseFactoryWithDependenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseFactoryWithDependenciesService = TestBed.get(UseFactoryWithDependenciesService);
    expect(service).toBeTruthy();
  });
});
