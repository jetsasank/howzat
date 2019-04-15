import {CURRENT_MATCHES_LOADED} from "../constants/actionTypes"

/*
 * Loads the list of current matches from the API
 */
export function getCurrentMatches() {
    return function (dispatch) {
        return fetch("http://cricapi.com/api/matches/vsbfYGLVWgR6MiJjjzRUftfPn403")
            .then(response => response.json())
            .then(json => {
                dispatch({type: CURRENT_MATCHES_LOADED, payload: json.matches});
            });
    }
}