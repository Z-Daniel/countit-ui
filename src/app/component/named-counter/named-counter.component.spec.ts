import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedCounterComponent } from './named-counter.component';

describe('NamedCounterComponent', () => {
  let component: NamedCounterComponent;
  let fixture: ComponentFixture<NamedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
