import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private store: Store<AppState>) {
        this.loginForm = new FormGroup({
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required])
        })
    }

    ngOnInit(): void {
    }

    onLogin() {
        console.log(this.loginForm.value);
        this.store.dispatch(loginStart(
            {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            }
        ))

    }

    onSignOut() {

    }

}
