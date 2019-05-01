const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('projects GET request:', req.query );
    console.log('req.query.search', req.query.search);
    if(req.query.search === 'all') {
        pool.query(`SELECT * FROM "movies" ORDER BY "year"`)
            .then(result => {
                res.send(result.rows);
            })
            .catch(error => {
                console.log(`Couldn't get data`, error);
                res.sendStatus(500);
            })
    }
    else {
        const queryText = `SELECT * FROM "movies" WHERE title = $1`;
        pool.query(queryText, [req.query.search])
            .then(result => {
                res.send(result.rows);
            })
            .catch(error => {
                console.log(`Couldn't get data`, error);
                res.sendStatus(500);
            })
    }
});

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "movies" WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE "movies" SET "viewed" = NOT "viewed" WHERE id=$1`;
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    res.sendStatus(200);
}); // END PUT Route



/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('in post router');

    const newProject = req.body;
    const queryText = `INSERT INTO "movies" ("title", "year", "description", "length", "video_url", "image_url")
                    VALUES ($1, $2, $3, $4, $5, $6)`;
    const queryValues = [
        newProject.title,
        newProject.year,
        newProject.description,
        newProject.length,
        newProject.video_url,
        newProject.image_url,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        });

});

module.exports = router;