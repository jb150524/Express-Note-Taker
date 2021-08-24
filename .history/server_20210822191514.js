const express = require('express');
const path = require('path');
const htmlroutes = require('./routes/html-routes');
const apiroutes = require('./routes/html-routes');

// Setting up the Express APP //
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));
app.use(express.static('./public'));
app.use('/api', api-routes);
app.use('/', html-routes);


app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🛸`)
);
