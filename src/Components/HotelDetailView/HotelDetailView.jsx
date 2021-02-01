import React from 'react';
import HotelHeaderView from '../HotelsView/HotelHeader/HotelHeaderView';
import NavBarView from '../CommonView/NavBar/NavBarView';
import FooterView from '../CommonView/Footer/FooterView';
import HotelSearch from '../HotelsView/HotelSearch/HotelSearch';
import HotelDetail from '../HotelDetailView/HotelDetail/HotelDetail';
export default function HotelDetailView() {
  return (
    <div id="page">
      <NavBarView />
      <HotelHeaderView />
      <div className="colorlib-wrap">
        <div className="container">
          <div className="row">
            <HotelDetail />
            <HotelSearch />
          </div>
        </div>
      </div>
      <FooterView />
    </div>
  );
}
