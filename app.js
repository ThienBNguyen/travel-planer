//include dotenv to loads environment variables from a .env file process.env
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
var unirest = require("unirest");

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
const { response } = require('express');
const { post } = require('./routers/user-routes');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
// app.post('/hotels', async(request, response) => {
//   // console.log(request.body)
//   // console.log(response.body)
// } )
app.get('/hotels/', async( request, response, next) => {
  console.log(request.query.data);
  const hotelInfo = request.query.data
  let destinationId =''
  // let convertObj = []
  // for(let i = 0; i < hotelInfo.length; i++){
  //   convertObj = JSON.parse(hotelInfo[i])
  //   console.log(convertObj.location)
  // }
  // console.log(hotelInfo.length)
  // for(let i = 0; i < hotelInfo.length; i++){
  //   convertObj = JSON.parse(hotelInfo[i])
  //   console.log(convertObj.location)
  // }
  // console.log(hotelInfo[0])
  // let obj = JSON.parse(hotelInfo[0])
  // console.log(obj.location)
  //get destination ID
  let req_search =  unirest("GET", "https://hotels4.p.rapidapi.com/locations/search");

req_search.query({
	"query": `${JSON.parse(request.query.data[0]).location}`,
	"locale": "en_US"
});

req_search.headers({
	"x-rapidapi-key": "9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056",
	"x-rapidapi-host": "hotels4.p.rapidapi.com",
	"useQueryString": true
});


req_search.end(function (res) {
	if (res.error) throw new Error(res.error);

  // console.log(res.body.suggestions[0].entities[0].destinationId);
  // console.log(res.body);
  destinationId = res.body.suggestions[0].entities[0].destinationId
  getApiList(destinationId)
});
const getApiList = (location) => {

  let req_list = unirest("GET", "https://hotels4.p.rapidapi.com/properties/list");
  req_list.query({
    "destinationId": "1506246",
  //   "destinationId": `${destinationId}`,
    "destinationId": location,

  
  
    "pageNumber": "1",
    "checkIn": `${JSON.parse(request.query.data[1]).checkIn}`,
    "checkOut": `${JSON.parse(request.query.data[2]).checkOut}`,
    "pageSize": "20",
    "adults1": "2",
    "currency": "USD",
    "locale": "en_US",
    "sortOrder": "PRICE"
  });
  
  req_list.headers({
    "x-rapidapi-key": "9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056",
    "x-rapidapi-host": "hotels4.p.rapidapi.com",
    "useQueryString": true
  });
  
  req_list.end( (res) => {
    if (res.error) throw new Error(res.error);
    console.log(request.body)
    const data = {
      hotelApi: res.body
    }
    console.log(request.body)
  
  // console.log(res.body)
    response.json(data.hotelApi)
  });
}


})
app.get('/hoteldetail', ( request, response) => {
//get hotel detail from api 
var req_detail = unirest("GET", "https://hotels4.p.rapidapi.com/properties/get-details");

req_detail.query({
	"id": "468906",
	"locale": "en_US",
	"currency": "USD",
	"checkOut": "2020-01-15",
	"adults1": "1",
	"checkIn": "2020-01-08"
});

req_detail.headers({
	"x-rapidapi-key": "9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056",
	"x-rapidapi-host": "hotels4.p.rapidapi.com",
	"useQueryString": true
});


req_detail.end(function (res) {
	if (res.error) throw new Error(res.error);

  // console.log(res.body);
  const dataDetail = {
    hotelDetail: res.body
  }
// console.log(res.body)
  response.json(dataDetail.hotelDetail)
});
})


app.get('/hotelimage', ( request, response) => {

//get roomimage from api 
var req_image = unirest("GET", "https://hotels4.p.rapidapi.com/properties/get-hotel-photos");

req_image.query({
	"id": "468906"
});

req_image.headers({
	"x-rapidapi-key": "9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056",
	"x-rapidapi-host": "hotels4.p.rapidapi.com",
	"useQueryString": true
});


req_image.end(function (res) {
	if (res.error) throw new Error(res.error);

  response.json(res.body)

});
})
//get search data from api by cities, districts, places

//not ready
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



