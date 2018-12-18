import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: {
    log(): string { return 'Hello from overridden UseValueService'; },
  },
})
export class UseValueService {
  log(): string {
    return 'Hello from UseValueService';
  }
}
