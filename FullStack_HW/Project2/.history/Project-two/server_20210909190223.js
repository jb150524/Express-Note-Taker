const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.Port || 3001;

const sequelize = require('./config/connection');

const hbs = exphbs.create({});