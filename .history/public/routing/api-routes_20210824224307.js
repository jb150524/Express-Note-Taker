const apiRoutes = require('express').Router();
const fs = require('fs');

apiRoutes.get('/notes', (req, res) => {
    console/log
    fs.readFileSync('./db/db.json').then((result) => res.json(JSON.parse(result)));
})

module.exports = apiRoutes;

