import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMovieSaga(action) {
    console.log('got the movies', action);
    try {
        const response = yield axios.get('/api/media')
        console.log('going to the reducers...');
        
        yield put({ type: 'SET_MOVIE', payload: response.data });
        console.log('data is', response.data);
    }
    catch (error) {
        console.log(`couldn't get the data`);
    }
}

function* movieInfoSaga(action) {
    console.log('got the info', action);
    try{
        const response = yield axios.get(`/api/media/${action.payload}`)
        console.log('going to inforeducer...', response.data);
        yield put({ type: 'SET_DETAILS', payload: response.data});
        console.log('data is', response.data);
    }
    catch (error) {
        console.log(`couldn't get the info`);
    }
    
}
function* movieSaga() {
    yield takeLatest('GET_MOVIE', getMovieSaga);
    yield takeLatest('MOVIE_DETAILS', movieInfoSaga)
}

export default movieSaga;