import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule } from '@angular/forms';

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
        CounterRoutingModule
    ],
    exports: [],
    providers: [],
})
export class CounterModule { }
