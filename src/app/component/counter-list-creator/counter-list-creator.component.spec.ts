import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListCreatorComponent } from './counter-list-creator.component';

describe('CounterListCreatorComponent', () => {
  let component: CounterListCreatorComponent;
  let fixture: ComponentFixture<CounterListCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterListCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
