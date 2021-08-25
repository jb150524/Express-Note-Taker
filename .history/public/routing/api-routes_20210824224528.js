const apiRoutes = require('express').Router();
const fs = require('fs');

apiRoutes.get('/notes', (req, res) => {
    console.log('Get request')

    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log(`Get request - Return Notes Data: ${JSON.stringify(data)}`
    fs.readFileSync('./db/db.json').then((result) => res.json(JSON.parse(result)));
})

module.exports = apiRoutes;

