import { getCounter } from './../state/counter.selectors';
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

    counter$?: Observable<number>;

    constructor(private store: Store<{ counter: CounterState }>) {
        this.counter$ = this.store.select(getCounter);
    }

    ngOnInit(): void {

    }

}
