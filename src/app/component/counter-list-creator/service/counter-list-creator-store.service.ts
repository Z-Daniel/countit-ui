import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { Counter } from 'src/app/model/counter.model';
import { CounterService } from 'src/app/service/counter.service';

interface CounterListCreatorState {
  counters: Counter[];
}

@Injectable()
export class CounterListCreatorStoreService extends ComponentStore<CounterListCreatorState> {
  readonly counters$ = this.select((state) => state.counters);

  private readonly initializeCounters = this.updater(
    (state, counters: Counter[]) => ({
      ...state,
      counters: [...counters],
    })
  );

  private readonly addCounterToState = this.updater(
    (state, counter: Counter) => ({
      ...state,
      counters: [counter, ...state.counters],
    })
  );

  private readonly updateCounter = this.updater((state, counter: Counter) => {
    const indexOfUpdatedCounter = state.counters
      .map((c) => c.name)
      .indexOf(counter.name);
    return {
      ...state,
      counters: Object.assign([], state.counters, {
        [indexOfUpdatedCounter]: counter,
      }),
    };
  });

  constructor(private counterService: CounterService) {
    super({
      counters: [],
    });
  }

  readonly requestCounters = this.effect((action$: Observable<void>) =>
    action$.pipe(
      switchMap(() =>
        this.counterService.getAll().pipe(
          tapResponse(
            (response) => this.initializeCounters(response),
            (error) => console.error(error)
          )
        )
      )
    )
  );

  readonly addCounterRequest = this.effect((counter$: Observable<Counter>) =>
    counter$.pipe(
      switchMap((counter: Counter) =>
        this.counterService.create(counter).pipe(
          tapResponse(
            (response) => this.addCounterToState(response),
            (error) => console.error(error)
          )
        )
      )
    )
  );

  readonly updateCounterRequest = this.effect((counter$: Observable<Counter>) =>
    counter$.pipe(
      switchMap((counter: Counter) =>
        this.counterService.update(counter).pipe(
          tapResponse(
            (response) => this.updateCounter(response),
            (error) => console.error(error)
          )
        )
      )
    )
  );
}
