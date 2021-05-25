import { types } from "../types/types";

const initialState = {
    words: []
}

export const reverseWordReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.addNewReverseWord:
            return {
                ...state,
                words: [ action.payload,...state.words]
            };

        default:
            return state
    }
}