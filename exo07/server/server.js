let express = require('express');
let bodyParser = require('body-parser');
let api = require('./api/api');
let app=express();
app.use(bodyParser.json());
app.use('/api',api);
module.exports = app;