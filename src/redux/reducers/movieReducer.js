import { combineReducers } from 'redux';

const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

const movieInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    movieReducer,
    movieInfoReducer,
});