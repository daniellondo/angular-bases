import { CounterComponent } from './counter/counter.appcomponent';
import { NgModule } from '@angular/core';

@NgModule(
  {
    declarations : [CounterComponent],
    exports: [CounterComponent]
  })
export class CounterModule
{

}
