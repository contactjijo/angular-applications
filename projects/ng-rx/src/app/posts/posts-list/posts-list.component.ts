import { getPosts } from './state/posts.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';

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

}
