//include dotenv to loads environment variables from a .env file process.env
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//HTTP request logger
app.use(morgan('tiny'));
// For info routes
const userRoutes = require('./routers/user-routes')
// For bodyParser
app.use(bodyParser.json());
// set CORS headers avoid CORS error
app.use(cors());
// import HttpError model
const HttpError = require('./models/http-error');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
// use routes

app.use('/user', userRoutes)
// Handle unsupported routes erro
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
  });

  // Listen to our 5000 port
let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, function (res) {
  console.log('server running on port 5000');
});

// Connect to database
// Get username and password from .env file
const dbUsername = process.env.DBUSERNAME;
const dbPass = process.env.DBPASSWORD;
const dbName = process.env.DBNAME;

const dbConnect =
  'mongodb+srv://' +
  dbUsername +
  ':' +
  dbPass +
  '@cluster0.plkkx.mongodb.net/' +
  dbName +
  '?retryWrites=true&w=majority';
mongoose
  .connect(dbConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  })
  .then(() => {
    // app.listen(port, function (res) {
    console.log('server running on port 5000');
    // });
  })
  .catch((err) => {
    console.log(err);
  });
