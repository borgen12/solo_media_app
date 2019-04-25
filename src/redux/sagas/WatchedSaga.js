import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* changeViewSaga(action) {
    console.log('Hit the changeViewSaga', action);

    try {
        yield axios.put(`/api/media/${action.payload}`);
        yield put({ type: 'GET_MOVIE' });
    }
    catch (error) {
        console.log(`Couldn't change the boolean`, error);
        alert(`Sorry, couldn't change property. Try again later`);
    }
}


function* viewedSaga() {
    yield takeLatest('TURN_TRUE', changeViewSaga);
}


export default viewedSaga;