const apiRoutes = require('express').Router();
const fs = require('fs');

apiRoutes.get('/', (req, res) => {
    fs.readFileSync('./db/db.json').then((result) => res.json(JSON.parse(result)));
})

module.exports = apiRoutes;

