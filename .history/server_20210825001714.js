const express = require('express');
const path = require('path');
const api = require('./public/routing/api-routes.js');

// Setting up the Express APP //
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);


app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


// Start the server on the PORT
app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT} 🛸`)
});
