import { getPosts } from '../state/posts.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { deletePost } from '../state/posts.actions';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

    posts$?: Observable<Post[]>

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.posts$ = this.store.select(getPosts);
    }

    onDeletePost(id: any) {
        if (confirm("Do you want to delete this post?")) {
            console.log("delete the post...", id);
            this.store.dispatch(deletePost({ id }))
        }
    }

}
