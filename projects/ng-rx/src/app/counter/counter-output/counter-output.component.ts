import { getCounter } from './../state/counter.selectors';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
    selector: 'app-counter-output',
    templateUrl: './counter-output.component.html',
    styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

    counter$?: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter$ = this.store.select(getCounter);
    }

    ngOnInit(): void {

    }

}
