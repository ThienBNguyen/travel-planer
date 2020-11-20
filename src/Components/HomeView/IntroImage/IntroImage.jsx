import bgimg1 from '../../../resouces/images/img_bg_1.jpg';
import bgimg2 from '../../../resouces/images/img_bg_2.jpg';
import bgimg3 from '../../../resouces/images/img_bg_3.jpg';
import bgimg4 from '../../../resouces/images/img_bg_4.jpg';
import './IntroImage.scss';
import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export default class IntroImage extends Component {
  render() {
    return (
      <div>
        <AliceCarousel
          infinite
          autoPlay
          disableDotsControls
          autoPlayInterval="5000"
          disableButtonsControls
        >
          <div>
            <div
              className="container-fluid sliderimg"
              style={{ backgroundImage: `url(${bgimg1})` }}
            >
              <div className="row flexbox flexbox">
                <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                  <div className="slider-text-inner ">
                    <h2>2 Days Tour</h2>
                    <h1>Amazing Maldives Tour</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={bgimg1} className="sliderimg" alt="test" /> */}
          </div>
          <div>
            <div
              className="container-fluid sliderimg"
              style={{ backgroundImage: `url(${bgimg2})` }}
            >
              <div className="row flexbox">
                <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                  <div className="slider-text-inner text-center">
                    <h2>10 Days Cruises</h2>
                    <h1>From Greece to Spain</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={bgimg2} className="sliderimg" alt="" /> */}
          </div>

          <div>
            <div
              className="container-fluid sliderimg"
              style={{ backgroundImage: `url(${bgimg3})` }}
            >
              <div className="row flexbox">
                <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                  <div className="slider-text-inner text-center">
                    <h2>Explore our most tavel agency</h2>
                    <h1>Our Travel Agency</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={bgimg3} className="sliderimg" alt="" /> */}
          </div>

          <div>
            <div
              className="container-fluid sliderimg"
              style={{ backgroundImage: `url(${bgimg4})` }}
            >
              <div className="row flexbox">
                <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                  <div className="slider-text-inner text-center">
                    <h2>Experience the</h2>
                    <h1>Best Trip Ever</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={bgimg4} className="sliderimg" alt="" /> */}
          </div>
        </AliceCarousel>
      </div>
    );
  }
}
