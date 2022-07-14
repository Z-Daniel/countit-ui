import { Component, Input, OnInit, Output } from '@angular/core';
import { Counter } from 'src/app/model/counter.model';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.less'],
})
export class CounterListComponent implements OnInit {
  @Input() counters!: Counter[] | null;

  constructor() {}

  ngOnInit(): void {}
}
