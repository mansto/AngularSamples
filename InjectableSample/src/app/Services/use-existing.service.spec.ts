import { TestBed } from '@angular/core/testing';

import { UseExistingService, UseExistingTestService } from './use-existing.service';

describe('UseExistingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: UseExistingService,
        useClass: UseExistingTestService
      }
    ]
  }));

  it('should be created', () => {
    const service: UseExistingService = TestBed.get(UseExistingService);
    expect(service).toBeTruthy();
  });

  it('should message be equal to Hello from UseExistingTestService', () => {
    const service: UseExistingService = TestBed.get(UseExistingService);
    expect(service.log()).toEqual('Hello from UseExistingTestService');
  });
});
