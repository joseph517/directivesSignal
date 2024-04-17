import { Component, computed, signal } from '@angular/core';

@Component({
  // selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter() );

  increseby( value: number ){

    this.counter.update( current => current + value )

  }


}
