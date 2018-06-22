const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/WDI34_PROJECT_3-${env}`;
const secret = 'shh';


module.exports = { port, dbURI, secret };
