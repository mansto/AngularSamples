import { TestBed } from '@angular/core/testing';

import { UseClassService, UseClassTestService } from './use-class.service';

describe('UseClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: UseClassService,
        useClass: UseClassTestService
      }
    ]
  }));

  it('should be created', () => {
    const service: UseClassService = TestBed.get(UseClassService);
    expect(service).toBeTruthy();
  });

  it('should message equal Hello from UseClassTestService', () => {
    const service: UseClassService = TestBed.get(UseClassService);
    expect(service.log()).toEqual('Hello from UseClassTestService');
  });
});
