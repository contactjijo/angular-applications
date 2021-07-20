
import { createReducer, Action, State, on } from '@ngrx/store';
import { addPost, updatePost } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = new Date().getTime().toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });

        return {
            ...state,
            posts: updatedPosts,
        };
    })

);

export function postsReducer(state: any | undefined, action: Action) {
    return _postsReducer(state, action);
}
