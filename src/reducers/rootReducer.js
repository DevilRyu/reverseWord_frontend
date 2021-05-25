import { combineReducers } from "redux";

import { reverseWordReducer } from "./reverseWordReducer";

export const rootReducer = combineReducers({
    reverseWord: reverseWordReducer,
});
