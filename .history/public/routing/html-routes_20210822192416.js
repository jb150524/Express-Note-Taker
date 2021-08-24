const path = require('path');
const routing = require('express').Routing();

routes.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
  });

routes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = routes;