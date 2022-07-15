import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Counter } from 'src/app/model/counter.model';

@Component({
  selector: 'app-named-counter',
  templateUrl: './named-counter.component.html',
  styleUrls: ['./named-counter.component.less'],
})
export class NamedCounterComponent {
  @Input() counter!: Counter;
  @Output() incrementCountByOne = new EventEmitter<Counter>();

  constructor() {}

  incrementCountByOneListener(): void {
    this.incrementCountByOne.emit(this.counter);
  }
}
