import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMovieSaga(action) {
    console.log('got the movies', action);
    try {
        const response = yield axios.get('/api/user')
        console.log('going to the reducers...');
        
        yield put({ type: 'SET_MOVIE', payload: response.data });
        console.log('data is', response.data);
    }
    catch (error) {
        console.log(`couldn't get the data`);
    }
}

function* movieSaga() {
    yield takeLatest('GET_MOVIE', getMovieSaga);
}

export default movieSaga;