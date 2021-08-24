const path = require('path');
const routing = require('express').Routing();

routing.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
  });

rout.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = routes;