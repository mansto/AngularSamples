import { Injectable } from '@angular/core';

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
