import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UseFactoryWithDependenciesService } from './use-factory-with-dependencies.service';

describe('UseFactoryWithDependenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    declarations: [
    ],
    providers: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: UseFactoryWithDependenciesService = TestBed.get(UseFactoryWithDependenciesService);
    expect(service).toBeTruthy();
  });
});
