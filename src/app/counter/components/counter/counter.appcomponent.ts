import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter: {{ counter }}</h1>
  <button (click)="increasedBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="decreasedBy()">-1</button>`
})

export class CounterComponent{
  constructor() { this.counter = 10 }

  public counter : number;

  increasedBy( value : number):void{
    this.counter +=value;
  }
  decreasedBy():void{
    this.counter -=1;
  }

  resetCounter():void {
    this.counter = 10;
  }
}

