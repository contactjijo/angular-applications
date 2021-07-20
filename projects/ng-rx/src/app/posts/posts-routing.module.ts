import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
            {
                path: "add",
                component: AddPostComponent
            },
            {
                path: "edit/:id",
                component: EditPostComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }
