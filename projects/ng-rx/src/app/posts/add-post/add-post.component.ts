import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

    postForm: FormGroup;

    constructor() {
        this.postForm = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            description: new FormControl(null, [Validators.required, Validators.minLength(10)])
        })
    }

    ngOnInit(): void {

    }

    onSubmit() {
        console.log(this.postForm.value);

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
