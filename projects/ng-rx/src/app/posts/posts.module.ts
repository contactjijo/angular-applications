import { POSTS_STATE_NAME } from './state/posts.selector';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PostsRoutingModule,
        StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
    ],
    exports: [],
    providers: [],
})
export class PostsModule { }
