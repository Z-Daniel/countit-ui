import { TestBed } from '@angular/core/testing';

import { CounterListCreatorStoreService } from './counter-list-creator-store.service';

describe('CounterListCreatorStoreService', () => {
  let service: CounterListCreatorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterListCreatorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
