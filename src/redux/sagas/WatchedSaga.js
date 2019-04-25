import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE  SET likes=likes+1 WHERE id=$1`;
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    /* for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    } */
    res.sendStatus(200);
}); // END PUT Route


function* movieSaga() {
    yield takeLatest('ADD_MOVIE', addMovieSaga);
    yield takeLatest('DELETE_MOVIE', deleteMovieSaga);
}


export default movieSaga;