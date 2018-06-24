const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./lib/errorHandler');
const { port, dbURI } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// const dbURI = 'mongodb://localhost/boat-api'; in environment now

mongoose.connect(dbURI);

const routes = require('./config/routes');
// const port = 4000; in environment now

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use('/api', routes);

app.use(errorHandler);
//global error handler, always need all 4 arguments, then need next in controllers   should always be last before listen to catch all errors


app.listen(port, () => console.log(`Aye aye captain we're pulling into port ${port}`));

module.exports = app;
