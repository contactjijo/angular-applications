export interface CounterState {
    counter: number;
    channelName: string
}

export const initialState: CounterState = {
    counter: 8,
    channelName: "Jijo's Channel..."
};
