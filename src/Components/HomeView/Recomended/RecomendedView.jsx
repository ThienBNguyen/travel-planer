import React from 'react';
import hotel1 from '../../../resouces/images/hotel-1.jpg';
import hotel2 from '../../../resouces/images/hotel-2.jpg';
import hotel3 from '../../../resouces/images/hotel-3.jpg';
import hotel4 from '../../../resouces/images/hotel-4.jpg';
import './RecommendedView.scss';
import AliceCarousel from 'react-alice-carousel';

export default function RecomendedView() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className="item">
      <div className="hotel-entry">
        <a
          href="hotels.html"
          className="hotel-img"
          style={{ backgroundImage: `url(${hotel4})` }}
        >
          <p className="price">
            <span>$120</span>
            <small> /night</small>
          </p>
        </a>
        <div className="desc">
          <p className="star">
            <span>
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
            </span>
            545 Reviews
          </p>
          <h3>
            <a href="#">Hotel Edison</a>
          </h3>
          <span className="place">New York, USA</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </div>,
    <div className="item">
      <div className="hotel-entry">
        <a
          href="hotels.html"
          className="hotel-img"
          style={{ backgroundImage: `url(${hotel1})` }}
        >
          <p className="price">
            <span>$120</span>
            <small> /night</small>
          </p>
        </a>
        <div className="desc">
          <p className="star">
            <span>
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
            </span>
            545 Reviews
          </p>
          <h3>
            <a href="#">Hotel Edison</a>
          </h3>
          <span className="place">New York, USA</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </div>,
    <div className="item">
      <div className="hotel-entry">
        <a
          href="hotels.html"
          className="hotel-img"
          style={{ backgroundImage: `url(${hotel2})` }}
        >
          <p className="price">
            <span>$120</span>
            <small> /night</small>
          </p>
        </a>
        <div className="desc">
          <p className="star">
            <span>
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
            </span>
            545 Reviews
          </p>
          <h3>
            <a href="#">Hotel Edison</a>
          </h3>
          <span className="place">New York, USA</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </div>,
    <div className="item">
      <div className="hotel-entry">
        <a
          href="hotels.html"
          className="hotel-img"
          style={{ backgroundImage: `url(${hotel3})` }}
        >
          <p className="price">
            <span>$120</span>
            <small> /night</small>
          </p>
        </a>
        <div className="desc">
          <p className="star">
            <span>
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
              <i className="icon-star-full" />
            </span>
            545 Reviews
          </p>
          <h3>
            <a href="#">Hotel Edison</a>
          </h3>
          <span className="place">New York, USA</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </div>,
  ];
  return (
    <div id="colorlib-hotel">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
            <h2>Recommended Hotels</h2>
            <p className="heading-margin">
              We love to tell our successful far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <div className="owl-carousel">
              <AliceCarousel
                responsive={responsive}
                infinite
                autoPlay
                disableDotsControls
                autoPlayInterval="5000"
                disableButtonsControls
                items={items}
              ></AliceCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
