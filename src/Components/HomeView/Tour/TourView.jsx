import React from 'react';
import './TourView.scss';
import tour1 from '../../../resouces/images/tour-1.jpg';
import tour2 from '../../../resouces/images/tour-2.jpg';
import tour3 from '../../../resouces/images/tour-3.jpg';
import tour4 from '../../../resouces/images/tour-4.jpg';
import tour5 from '../../../resouces/images/tour-5.jpg';
import tour6 from '../../../resouces/images/tour-6.jpg';
import tour7 from '../../../resouces/images/tour-7.jpg';
import tour8 from '../../../resouces/images/tour-8.jpg';

export default function TourView() {
  function fadeInUp(e) {
    e.target.className = 'fadeInUp, animated-fast  ';
  }

  return (
    <div className="colorlib-tour colorlib-light-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
            <h2>Popular Destination</h2>
            <p className="heading-margin">
              We love to tell our successful far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="tour-wrap">
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast ">
          <div
            onMouseOver={fadeInUp}
            className="tour-img"
            style={{ backgroundImage: `url(${tour1})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Athens, Greece</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour2})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Thailand</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour3})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Philippines</h2>
            <span className="city">Lipa, Philippines</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour4})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Greece</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour5})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Greece</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour6})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Greece</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour7})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Greece</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
        <a href="!#" className="tour-entry animate-box fadeInUp animated-fast">
          <div
            className="tour-img"
            style={{ backgroundImage: `url(${tour8})` }}
          />
          <span className="desc">
            <p className="star">
              <span>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </span>
              545 Reviews
            </p>
            <h2>Family Tour in Greece</h2>
            <span className="city">Athens, Greece</span>
            <span className="price">$450</span>
          </span>
        </a>
      </div>
    </div>
  );
}
