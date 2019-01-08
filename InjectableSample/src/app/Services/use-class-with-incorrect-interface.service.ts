import { Injectable } from '@angular/core';

// Wird im Unittest verwendet
export class UseClassWithIncorrectInterfaceTestService {
  logMe(): string {
    return 'Hello from UseClassTestService';
  }
}

export class UseClassWithIncorrectInterfaceService2 {
  logMe(): string {
    return 'Hello from UseClassWithIncorrectInterfaceService2';
  }
}

@Injectable({
  providedIn: 'root',
  useClass: UseClassWithIncorrectInterfaceService2
})
export class UseClassWithIncorrectInterfaceService {
  log(): string {
    return 'Hello from UseClassWithIncorrectInterfaceService';
  }
}
