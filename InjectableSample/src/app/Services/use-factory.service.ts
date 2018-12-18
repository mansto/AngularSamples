
import { Injectable } from '@angular/core';

export class UseFactoryService3 {
  log(): string {
    return 'Hello from UseFactoryService3';
  }
}

export class UseFactoryService2 {
  log(): string {
    return 'Hello from UseFactoryService2';
  }
}


@Injectable({
  providedIn: 'root',
  useFactory: () => {
    return new UseFactoryService3();
  },
})
export class UseFactoryService {
  log(): string {
    return 'Hello from UseFactoryWithDependenciesService';
  }
}
