import { CounterState } from './../state/counter.state';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-counter-output',
    templateUrl: './counter-output.component.html',
    styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

    counter$: Observable<CounterState>;
    constructor(private store: Store<{ counter: CounterState }>) {
        this.counter$ = this.store.select('counter');
    }

    ngOnInit(): void {
        this.counter$ = this.store.select('counter');
    }

}
