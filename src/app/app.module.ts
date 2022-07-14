import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NamedCounterComponent } from './component/named-counter/named-counter.component';
import { CounterListComponent } from './component/counter-list/counter-list.component';
import { CounterFormComponent } from './component/counter-form/counter-form.component';
import { CounterListCreatorComponent } from './component/counter-list-creator/counter-list-creator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NamedCounterComponent,
    CounterListComponent,
    CounterFormComponent,
    CounterListCreatorComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
