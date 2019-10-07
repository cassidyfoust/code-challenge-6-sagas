const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "class";`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing species and animals query', err);
            res.sendStatus(500);
        });
});

module.exports = router;