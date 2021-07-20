
import { createReducer, Action, State, on } from '@ngrx/store';
import { addPost } from './posts.actions';
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
    }));

export function postsReducer(state: any | undefined, action: Action) {
    return _postsReducer(state, action);
}
