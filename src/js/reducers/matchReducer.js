import {CURRENT_MATCHES_LOADED} from "../constants/actionTypes"

const initialState = {
    currentMatches: []
};

export function matchReducer(state = initialState, action) {
    // Add the list of current matches from the API to the state.
    if (action.type === CURRENT_MATCHES_LOADED) {
        return Object.assign(
            {},
            state,
            {currentMatches: state.currentMatches.concat(action.payload)}
        );
    }
    return state;
}