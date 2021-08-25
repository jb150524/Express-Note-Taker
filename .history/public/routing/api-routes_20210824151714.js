const router = require('express').Router();
const store = require('../db/db.json'

data.get('/', (req, res) => {
    fs.readFileSync('./db/db.json').then((result) => res.json(JSON.parse(result)));
})

module.exports = data;

