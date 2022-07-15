import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from 'src/app/model/counter.model';
import { CounterListCreatorStoreService } from './service/counter-list-creator-store.service';

@Component({
  selector: 'app-counter-list-creator',
  templateUrl: './counter-list-creator.component.html',
  styleUrls: ['./counter-list-creator.component.less'],
  providers: [CounterListCreatorStoreService],
})
export class CounterListCreatorComponent implements OnInit {
  counters$: Observable<Counter[]> =
    this.counterListCreatorStoreService.counters$;

  constructor(
    private counterListCreatorStoreService: CounterListCreatorStoreService
  ) {}

  ngOnInit(): void {
    this.counterListCreatorStoreService.requestCounters();
  }

  incrementCountByOneListener(counter: Counter): void {
    counter = { ...counter, count: counter.count + 1 };
    this.counterListCreatorStoreService.updateCounterRequest(counter);
  }
}
