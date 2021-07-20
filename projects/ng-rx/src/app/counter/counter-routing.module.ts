import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';


const routes: Routes = [
    { path: '', component: CounterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRoutingModule { }
