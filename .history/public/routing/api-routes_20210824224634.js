const apiRoutes = require('express').Router();
const { response } = require('express');
const fs = require('fs');

apiRoutes.get('/notes', (req, res) => {
    console.log('Get request')

    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log(`Get request - Return Notes Data: ${JSON.stringify(data)}`);

    response.json(data);
});

apiRoutes

module.exports = apiRoutes;

