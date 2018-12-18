import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UseExistingService2 {
  log(): string {
    return 'Hello from UseExistingService2';
  }
}

@Injectable({
  providedIn: 'root',
  useExisting: UseExistingService2
})
export class UseExistingService {
  log(): string {
    return 'Hello from UseExistingService';
  }
}
