import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  bookQuantity: number=10;
  counterValue: number = 0;
  decrement(){
    if(this.counterValue > 0){
      this.counterValue--;
    }
  }
  increment(){
    if(this.counterValue<this.bookQuantity)
    this.counterValue++;
  }
  remove(){
  
  }
}

