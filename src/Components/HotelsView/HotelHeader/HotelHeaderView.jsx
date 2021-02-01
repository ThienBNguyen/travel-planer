import React from 'react';
import coverimg4 from '../../../resouces/images/cover-img-4.jpg';
import './HotelHeaderView.scss';
export default function HotelHeaderView() {
  return (
    <div>
      <aside id="colorlib-hero">
        <div className="flexslider">
          <ul className="slides">
            <li style={{ backgroundImage: `url(${coverimg4})` }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className=" col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                    <div className="slider-text-inner text-center">
                      <h2>by colorlib.com</h2>
                      <h1>Find Hotel</h1>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
