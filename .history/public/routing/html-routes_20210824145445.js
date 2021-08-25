const path = require('path');
const router = require('express').Router()

routing.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'));
  });

routing.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

  module.exports = routing;