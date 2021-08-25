const express = require('express');
// const path = require('path');
const htmlRoutes = require('./public/routing/html-routes.js');
const apiRoutes = require('./public/routing/api-routes.js');

// Setting up the Express APP //
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// app.use(express.static('public'));
app.use('/apiRoutes', './public/routing/api-routes')(app);
app.use('/', './public/routing/html-routes')(app);


app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🛸`)
);
