import { addPost } from './../posts-list/state/posts.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

    postForm: FormGroup;

    constructor(private store: Store<AppState>) {
        this.postForm = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            description: new FormControl(null, [Validators.required, Validators.minLength(10)])
        })
    }

    ngOnInit(): void {

    }

    onSubmit() {
        console.log(this.postForm.value);
        const post = this.postForm.value;
        this.store.dispatch(addPost({ post }));
    }

    showDescriptionErros(): any {
        const descriptionControl = this.postForm.get('description');
        if (descriptionControl?.touched && !descriptionControl.valid) {
            if (descriptionControl.errors?.required) {
                return "Description is required";
            }

            if (descriptionControl.errors?.minlength) {
                return "Minimum 10 characters required.";
            }
        }
    }

}
