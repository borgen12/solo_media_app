const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('projects GET request');
    pool.query(`SELECT * FROM "movies"`)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`Couldn't get data`, error);
            res.sendStatus(500);
        })
});

router.get('/:id', (req, res) => {
    console.log('project info GET request');
    const queryText = `SELECT * FROM "movies" WHERE id = $1`;
    pool.query(queryText, [req.params.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`Couldn't get data`, error);
            res.sendStatus(500);
        })
});

router.delete('/:id', (req, res) => {
    const queryText = 'SELECT* FROM "projects" WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;