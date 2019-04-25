import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addMovieSaga(action) {
    console.log('in add products');

    try {
        //post sends the data collected by the form
        yield axios.post('/api/media', action.payload)
        //calls back to get function
        yield put({ type: 'GET_MOVIE' })
    }
    catch (error) {
        console.log(`Couldn't add project`, action.payload, error);
        alert(`Sorry, couldn't add the project. Try again later`);
    }
}

function* deleteMovieSaga(action) {
    console.log('Hit the deleteProjectSaga', action);

    try {
        yield axios.delete(`/api/media/${action.payload}`);
        yield put({ type: 'GET_MOVIE' });
    }
    catch (error) {
        console.log(`Couldn't delete movie`, error);
        alert(`Sorry, couldn't delete your movie. Try again later`);
    }
}
function* movieSaga() {
    yield takeLatest('ADD_MOVIE', addMovieSaga);
    yield takeLatest('DELETE_MOVIE', deleteMovieSaga);
}


export default movieSaga;