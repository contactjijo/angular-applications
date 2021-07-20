import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PostsRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PostsModule { }
