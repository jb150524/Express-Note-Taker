const express = require('express');
const path = require('path');
const fs = require('fs');

// Setting up the Express APP //
const app = express();
const PORT = process.env.PORT || 3001;
const mainDir = path 

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Get request from Reviews //
app.get('/', function (re