import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset, times5 } from './store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) { }

  ngOnInit() {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  times5() {
    this.store.dispatch(times5());
  }

}
