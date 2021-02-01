import React, { Component } from 'react';
import axios from 'axios';

import HotelHeaderView from './HotelHeader/HotelHeaderView';
import NavBarView from '../CommonView/NavBar/NavBarView';
import FooterView from '../CommonView/Footer/FooterView';
import HotelLists from './HotelLists/HotelLists';
import HotelSearch from './HotelSearch/HotelSearch';

export default class HotelsView extends React.Component {
  // state = {
  //   hotelApiData: [],
  // };
  // componentDidMount() {
  //   axios.get(`http://localhost:5000/hotels`).then((res) => {
  //     // let data = res.data;
  //     // updateHotelsApi([...data]);
  //     // console.log(data);
  //     const hotelApiData = res.data;
  //     this.setState({ hotelApiData });
  //   });
  // }

  render() {
    return (
      <div id="page">
        <NavBarView />
        <HotelHeaderView />
        <div className="colorlib-wrap">
          <div className="container">
            <div className="row">
              <HotelLists />
              <HotelSearch />
            </div>
          </div>
        </div>
        <FooterView />
      </div>
    );
  }
}
