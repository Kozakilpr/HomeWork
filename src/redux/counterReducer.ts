import Action from "./counterActions";

const initialState = {
    value: 0
}

export default function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "counter/minus":
            return { ...state, value: state.value - action.payload };
        case "counter/plus":
            return { ...state, value: state.value + action.payload };
        default:
            return state;
    }
}