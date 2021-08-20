const express = require('express');
const path = require('path');

// Setting up the Express APP //
const app = express()
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.use(express.static(path.join(__dirname + '/public')));

require('./public/routing/api-routes')(app);
require('./public/routing/html-routes')(app);

app.listen(PORT, function () {
    console.log(`App listening on PORT: ` + PORT`)
});

// // app.listen(PORT, () =>
//     console.log(`App listening at http://localhost:${PORT} 🛸`)
// );