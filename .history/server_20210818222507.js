const express = require('express');
const path = require('path');
var fs = require('fs');

// Setting up the Express APP //
var app = express();
var PORT = process.env.PORT  ||  3001;