const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/WDI34_PROJECT_3-${env}`;
const secret = 'shh';


module.exports = { port, dbURI, secret };
