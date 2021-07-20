import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { AppState } from '../../store/app.state';
import { getPostById } from '../posts-list/state/posts.selector';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

    post?: Post;
    postForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppState>) {
        this.postForm = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            description: new FormControl(null, [Validators.required, Validators.minLength(10)])
        })
    }

    ngOnInit(): void {
        this.route.paramMap
            .subscribe(params => {
                const id = params.get('id');
                console.log(id);

                this.store.select(getPostById, { id })
                    .pipe(
                        take(1)
                    )
                    .subscribe((post: any) => {
                        this.post = post
                        console.log(this.post);
                        this.createForm();
                    });
            })
    }

    createForm() {
        this.postForm = new FormGroup({
            title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(6)]),
            description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(10)])
        });
    }

    onSubmit() {
        console.log(this.postForm?.value);
        // this.store.dispatch(update)
    }


    showDescriptionErros(): any {
        const descriptionControl = this.postForm?.get('description');
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
