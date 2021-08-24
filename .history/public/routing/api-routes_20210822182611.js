const data = require('express').Routes();

const path = require('path');
const fs = require('fs');

data.get('/', (req, res) => {
    fs.readFileSync('./db/db.json').then((result) => res.json(JSON.parse(result)

