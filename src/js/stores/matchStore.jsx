import {applyMiddleware, createStore} from 'redux'
import {matchReducer} from "../reducers/matchReducer"
import thunk from "redux-thunk"

const matchStore = createStore(
    matchReducer,
    applyMiddleware(thunk)
);

export default matchStore;
