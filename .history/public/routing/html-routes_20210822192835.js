const path = require('path');
const routing = require('express').routing()

routing.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
  });

routing.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = routing;