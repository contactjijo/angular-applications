import { CustomCounterComponent } from './counter/custom-counter/custom-counter.component';
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
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterOutputComponent,
        CounterComponent,
        CounterButtonsComponent,
        CustomCounterComponent,
        HomeComponent,
        HeaderComponent,
        PostsListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({ counter: counterReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
