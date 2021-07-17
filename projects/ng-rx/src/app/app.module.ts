import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        CounterOutputComponent,
        CounterComponent,
        CounterButtonsComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        StoreModule.forRoot({ counter: counterReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
