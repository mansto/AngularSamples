import { TestBed } from '@angular/core/testing';
import { UseFactoryService, UseFactoryTestService } from './use-factory.service';

describe('UseFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [
        {
          provide: UseFactoryService,
          useClass: () => {
              return new UseFactoryTestService();
          }
        }
      ]
  }));

  it('should be created', () => {
    const service: UseFactoryService = TestBed.get(UseFactoryService);
    expect(service).toBeTruthy();
  });

  it('should message be equal to Hello from UseFactoryTestService', () => {
    const service: UseFactoryService = TestBed.get(UseFactoryService);
    expect(service.log()).toEqual('Hello from UseFactoryTestService');
  });
});
