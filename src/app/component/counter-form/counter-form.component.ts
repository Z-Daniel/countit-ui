import { Component } from '@angular/core';
import { CounterListCreatorStoreService } from '../counter-list-creator/service/counter-list-creator-store.service';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.less'],
})
export class CounterFormComponent {
  counterName = '';

  constructor(
    private counterListCreatorStoreService: CounterListCreatorStoreService
  ) {}

  create(): void {
    if (this.counterName === '') return;
    this.counterListCreatorStoreService.addCounterRequest({
      name: this.counterName,
      count: 0,
    });
    this.counterName = '';
  }
}
