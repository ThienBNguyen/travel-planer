import React, { Component } from 'react';
import axios from 'axios';

export const HotelContext = React.createContext();

export class HotelProvider extends Component {
  state = {
    hotels: [],
    // location: '',
    // checkIn: '',
    // checkOut: '',
    status: 'awerawer',
  };
  // fetchHotels = async (aug1, aug2, aug3) => {
  fetchHotels = async (location, checkIn, checkOut) => {
    // this.setState({
    //   location: location,
    //   checkIn: checkIn,
    //   checkOut: checkOut,
    // });
    // console.log(aug1);
    // const location = { aug1 };
    // const checkIn = { aug2 };
    // const checkOut = { aug3 };

    await axios
      .get('http://localhost:5000/hotels/', {
        params: {
          data: [{ location }, { checkIn }, { checkOut }],
        },
      })
      .then((res) => {
        // this.setState({
        //   status: 'done',
        //   hotels: res.data,
        // });
        const hotelsList = res.data.data.body;
        this.setState({ hotels: hotelsList });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.hotels);

    return (
      <HotelContext.Provider
        value={{
          ...this.state,
          fetchHotels: this.fetchHotels,
        }}
      >
        {this.props.children}
      </HotelContext.Provider>
    );
  }
}
