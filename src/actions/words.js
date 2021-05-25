import { fetchReverse } from "../helpers/fetch";
import { types } from "../types/types";

export const wordStartAddNew = (word) => {

    return async (dispatch) => {

        try {
            const resp = await fetchReverse(`iecho?text=${word}`);

            const body = await resp.json();

            if (body.text) {
                dispatch(wordAddNew(body.text));
            } else {

            }
        } catch (error) {
            console.log(error);

        }

    };
};

const wordAddNew = (word) => {

    return {
        type: types.addNewReverseWord,
        payload: word
    }
};