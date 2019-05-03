import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* downloadIdSaga(action) {
    console.log('in downloadSaga', action);
    try {
        const response = yield axios.get(`/api/post/${action.payload}`)
        console.log('going to downloadreducer...', response.data);
        yield put({ type: 'SET_DOWNLOAD', payload: response.data });
        console.log('data is', response.data);
    }
    catch (error) {
        console.log(`couldn't get the info`);
    }

}
function* downloadSaga() {
    yield takeLatest('NEW_DOWNLOAD', downloadIdSaga);
}

export default downloadSaga;