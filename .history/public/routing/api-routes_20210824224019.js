const apiRoutes = require('express').Router();
const fs = require('../db/db.json');

apiRoutes.get('/', (req, res) => {
    fs.readFileSync('./db/db.json').then((result) => res.json(JSON.parse(result)));
})

module.exports = apiRoutes;

