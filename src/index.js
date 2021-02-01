import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import {HotelProvider, HotelContext} from './Context/HotelContext'
ReactDOM.render(
  <HotelProvider>
    <HotelContext.Consumer>
     {({location, checkIn, checkOut, fetchHotels})=><App 
     location = {location}
     checkIn = {checkIn}
     checkOut = {checkOut}
fetchHotels = {fetchHotels}
     />}
    </HotelContext.Consumer>
  </HotelProvider>,
  // <App/>,
  document.getElementById('root')
);

