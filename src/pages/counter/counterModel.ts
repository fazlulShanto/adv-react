import { RootModel } from "@/utils/store";
import { createModel } from "@rematch/core";

const initialState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
};

export const countModel = createModel<RootModel>()({
    state: initialState, // initial state
    reducers: {
        // handle state changes with pure functions
        increment1(state, payload: number) {
            return { ...state, counter1: state.counter1 + payload };
        },
        increment2(state, payload: number) {
            return { ...state, counter2: state.counter2 + payload };
        },
        increment3(state, payload: number) {
            return { ...state, counter3: state.counter3 + payload };
        },
        increment4(state, payload: number) {
            return { ...state, counter4: state.counter4 + payload };
        },
        decrement1(state, payload: number) {
            return { ...state, counter1: state.counter1 - payload };
        },
        decrement2(state, payload: number) {
            return { ...state, counter2: state.counter2 - payload };
        },
        decrement3(state, payload: number) {
            return { ...state, counter3: state.counter3 - payload };
        },
        decrement4(state, payload: number) {
            return { ...state, counter4: state.counter4 - payload };
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async increment1Async(payload: number, state) {
            console.log("This is current root state", state);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch.count.increment1(payload);
        },
    }),
});
