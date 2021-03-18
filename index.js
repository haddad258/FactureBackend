const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());

const env = require('./env');
const db = require('./database');

app.db = db;

console.log("listening on port " + env.port);
app.listen(env.port);

module.exports = app;

const mod = require('./api/test.api');