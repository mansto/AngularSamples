import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class Calculator {
    public sum(a: number, b: number): number {
        return a + b;
    }
  }