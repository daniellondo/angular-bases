import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title : string = 'Mi primera app en Angular';
  public counter : number = 10;
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
