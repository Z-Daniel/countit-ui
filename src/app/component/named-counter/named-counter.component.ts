import { Component, Input } from '@angular/core';
import { Counter } from 'src/app/model/counter.model';
import { CounterListCreatorStoreService } from '../counter-list-creator/service/counter-list-creator-store.service';

@Component({
  selector: 'app-named-counter',
  templateUrl: './named-counter.component.html',
  styleUrls: ['./named-counter.component.less'],
})
export class NamedCounterComponent {
  @Input() counter!: Counter;

  constructor(
    private counterListCreatorStoreService: CounterListCreatorStoreService
  ) {}

  incrementCount(): void {
    this.counter = { ...this.counter, count: this.counter.count + 1 };
    this.counterListCreatorStoreService.updateCounterRequest(this.counter);
  }
}
