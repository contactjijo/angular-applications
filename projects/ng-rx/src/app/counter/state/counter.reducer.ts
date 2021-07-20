import { custom, decrement, increment, reset, changeChannelName } from './counter.actions';
import { initialState } from './counter.state';
import { createReducer, on } from "@ngrx/store";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(custom, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(changeChannelName, (state, action) => {
        return {
            ...state,
            channelName: "Modified Channel Name....."
        }
    })
)

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}



