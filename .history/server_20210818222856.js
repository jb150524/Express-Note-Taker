const express = require('express');
const path = require('path');
const fs = require('fs');

// Setting up the Express APP //
var app = express();
var PORT = process.env.PORT  ||  3001;

// Sets up the Express app to handle data parsing //
app.use(express.json())