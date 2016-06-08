let logger =require(`${process.cwd()}/server/utils/logger`);
let express = require('express');
let bodyParser = require('body-parser');
let db = require(`${process.cwd()}/server/utils/db`);
let config = require(`${process.cwd()}/server/config/config`);
let api = require('./api/api');
let app=express();
db.config();
if (config.seed) {
  require('./utils/seed');
}

app.use(bodyParser.json());
app.use('/api',api);
app.use(function(err,req,res,next){
   logger.log(err.message);
   res.status(500).send('Oops server is in a bad mood !'); 
});
module.exports = app;