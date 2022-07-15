import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from 'src/app/model/counter.model';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.less'],
})
export class CounterListComponent implements OnInit {
  @Input() counters!: Counter[] | null;
  @Output() incrementCountByOne = new EventEmitter<Counter>();

  constructor() {}

  ngOnInit(): void {}

  incrementCountByOneListener(counter: Counter): void {
    this.incrementCountByOne.emit(counter);
  }
}
