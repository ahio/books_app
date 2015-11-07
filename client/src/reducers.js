import { LOADED_DATA } from './actions'
import { combineReducers } from 'redux'

const initialState = {
    books: [],
    authors: []
};

function data(state = initialState, action) {
    switch (action.type) {
        case LOADED_DATA:
            return {...state, ...action.data};
        default:
            return state
    }
}

const rootReducer = combineReducers({
    data
});

export default rootReducer