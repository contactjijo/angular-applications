import { CounterState } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custom } from '../state/counter.actions';

@Component({
    selector: 'app-custom-counter',
    templateUrl: './custom-counter.component.html',
    styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {

    value: number;

    constructor(private store: Store<CounterState>) {
        this.value = 0;
    }

    ngOnInit() {
    }

    onSubmit() {
        this.store.dispatch(custom({ count: +this.value }));
    }

}
