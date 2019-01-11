import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class UseFactoryWithDependenciesTestService {
  log(): string {
    return 'Hello from UseFactoryWithDependenciesTestService';
  }
}

export class UseFactoryWithDependenciesService3 {
  log(): string {
    return 'Hello from UseFactoryWithDependenciesService3';
  }
}

export class UseFactoryWithDependenciesService2 {
  log(): string {
    return 'Hello from UseFactoryWithDependenciesService2';
  }
}


@Injectable({
  providedIn: 'root',
  useFactory: (client: HttpClient) => {
    console.log(!!client);
    return new UseFactoryWithDependenciesService3();
  },
  deps: [HttpClient]
})
export class UseFactoryWithDependenciesService {
  log(): string {
    return 'Hello from UseFactoryWithDependenciesService';
  }
}
