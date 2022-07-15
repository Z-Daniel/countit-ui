import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from '../model/counter.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly ROOT_PATH = '/counter';

  constructor(private baseService: BaseService) {}

  getAll(): Observable<Counter[]> {
    return this.baseService.getWithoutParams<Counter[]>(this.ROOT_PATH);
  }

  create(counter: Counter): Observable<Counter> {
    return this.baseService.post<Counter>(this.ROOT_PATH, counter);
  }

  incrementByOne(counterName: string): Observable<Counter> {
    return this.baseService.put<Counter, null>(
      `${this.ROOT_PATH}/${counterName}`,
      null
    );
  }
}
