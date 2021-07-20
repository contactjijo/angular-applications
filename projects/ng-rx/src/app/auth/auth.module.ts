import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AUTH_STATE_NAME } from './state/auth.selector';
import { AuthReducer } from './state/auth.reducer';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class AuthModule { }
