import { COUNTER_SELECTOR } from './state/counter.selectors';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

@NgModule({
    declarations: [
        CounterOutputComponent,
        CounterComponent,
        CounterButtonsComponent,
        CustomCounterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CounterRoutingModule,
        StoreModule.forFeature(COUNTER_SELECTOR, counterReducer),
    ],
    exports: [],
    providers: [],
})
export class CounterModule { }
