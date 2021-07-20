
import { createReducer, Action, State } from '@ngrx/store';
import { initialState } from './posts.state';

const _postsReducer = createReducer(initialState);

export function postsReducer(state: any | undefined, action: Action) {
    return _postsReducer(state, action);
}
