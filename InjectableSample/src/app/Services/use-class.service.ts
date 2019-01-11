import { Injectable } from '@angular/core';

// Wird im Unittest verwendet
export class UseClassTestService {
  log(): string {
    return 'Hello from UseClassTestService';
  }
}

export class UseClassService2 {
  log(): string {
    return 'Hello from UseClassService2';
  }
}

@Injectable({
  providedIn: 'root',
  useClass: UseClassService2
})
export class UseClassService {
  log(): string {
    return 'Hello from UseClassService';
  }
}
