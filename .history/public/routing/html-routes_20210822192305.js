const path = require('path');
const routes = require('express').Routes();

routes.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
  });

routes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = routes;