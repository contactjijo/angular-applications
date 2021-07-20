import { getChannelName } from './../state/counter.selectors';
import { CounterState } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, custom } from '../state/counter.actions';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-custom-counter',
    templateUrl: './custom-counter.component.html',
    styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {

    value: number;
    channelName$?: Observable<string>;

    constructor(private store: Store<CounterState>) {
        this.value = 0;
    }

    ngOnInit() {
        this.channelName$ = this.store.select(getChannelName)
    }

    onSubmit() {
        this.store.dispatch(custom({ count: +this.value }));
    }

    changeChannelName() {
        this.store.dispatch(changeChannelName());
    }

}
