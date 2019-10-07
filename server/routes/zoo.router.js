const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const queryText = `SELECT "species".species_name, "class".class_name, "species".id FROM "species"
JOIN "class"
	ON "class".id = "species".class_id;`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing species and animals query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const queryText = `DELETE from "species" WHERE "id" = $1;`
    const queryValues = [req.params.id];
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE animals query', err);
            res.sendStatus(500);
        });
})

module.exports = router;