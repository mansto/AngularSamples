import { TestBed } from '@angular/core/testing';
import { UseFactoryWithDependenciesService, UseFactoryWithDependenciesTestService } from './use-factory-with-dependencies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UseFactoryWithDependenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    declarations: [
    ],
    providers: [
      {
        provide: UseFactoryWithDependenciesService,
        useFactory: (client: HttpTestingController) => {
          return new UseFactoryWithDependenciesTestService();
        },
        deps: [HttpTestingController]
      },
    ]
  }));

  it('should be created', () => {
    const service: UseFactoryWithDependenciesService = TestBed.get(UseFactoryWithDependenciesService);
    expect(service).toBeTruthy();
  });

  it('should message be equal to Hello from UseFactoryWithDependenciesTestService', () => {
    const service: UseFactoryWithDependenciesService = TestBed.get(UseFactoryWithDependenciesService);
    expect(service.log()).toEqual('Hello from UseFactoryWithDependenciesTestService');
  });
});
