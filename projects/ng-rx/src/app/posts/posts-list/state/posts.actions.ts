import { createAction, props } from '@ngrx/store';
import { Post } from '../../../models/post.model';

export const ADD_POST = "add post";


export const addPost = createAction(ADD_POST, props<{ post: Post }>());



