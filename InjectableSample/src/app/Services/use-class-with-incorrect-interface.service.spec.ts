import { TestBed } from '@angular/core/testing';

import { UseClassWithIncorrectInterfaceService,
   UseClassWithIncorrectInterfaceTestService } from './use-class-with-incorrect-interface.service';

describe('UseClassWithIncorrectInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: UseClassWithIncorrectInterfaceService,
        useClass: UseClassWithIncorrectInterfaceTestService
      }
    ]
  }));

  it('should be created', () => {
    const service: UseClassWithIncorrectInterfaceService = TestBed.get(UseClassWithIncorrectInterfaceService);
    expect(service).toBeTruthy();
  });

  it('should message equal Hello from UseClassTestService', () => {
    const service: UseClassWithIncorrectInterfaceService = TestBed.get(UseClassWithIncorrectInterfaceService);
    expect(service.log()).toEqual('Hello from UseClassTestService');
  });
});
