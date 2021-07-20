import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class AuthModule { }
