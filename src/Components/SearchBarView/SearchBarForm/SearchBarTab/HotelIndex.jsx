import React from 'react';
import { HotelContext } from '../../../../Context/HotelContext';
import HotelTab from './HotelTab';

export default (props) => (
  <HotelContext.Consumer>
    {({ fetchHotels }) => <HotelTab {...props} fetchHotels={fetchHotels} />}
  </HotelContext.Consumer>
);
