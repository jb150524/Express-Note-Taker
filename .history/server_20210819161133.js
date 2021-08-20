const express = require('express');
const path = require('path');

// Setting up the Express APP //
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.static(path.join(__dirname + '/public')));

require('./public/routing/api-routes.js')(app);
require('./public/routing/html-routes.js')(app);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🛸`)
);