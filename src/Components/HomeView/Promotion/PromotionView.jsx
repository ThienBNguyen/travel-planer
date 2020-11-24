import React from 'react';
import Coverimg1 from '../../../resouces/images/cover-img-1.jpg';
import imgbg2 from '../../../resouces/images/img_bg_2.jpg';
import './PromotionView.scss';
export default function PromotionView() {
  return (
    <div
      id="colorlib-intro"
      className="intro-img"
      style={{ backgroundImage: `url(${Coverimg1})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 animate-box">
            <div className="intro-desc">
              <div className="text-salebox">
                <div className="text-lefts">
                  <div className="sale-box">
                    <div className="sale-box-top">
                      <h2 className="number">45</h2>
                      <span className="sup-1">%</span>
                      <span className="sup-2">Off</span>
                    </div>
                    <h2 className="text-sale">Sale</h2>
                  </div>
                </div>
                <div className="text-rights">
                  <h3 className="title">Just hurry up limited offer!</h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Book Now
                    </a>
                    <a href="#" className="btn btn-primary btn-outline">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="video-wrap">
              <div
                className="video colorlib-video"
                style={{ backgroundImage: `url(${imgbg2})` }}
              >
                <a
                  href="https://vimeo.com/channels/staffpicks/93951774"
                  className="popup-vimeo"
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/abfS_PZx5KU"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <i className="icon-video" />
                </a>
                <div className="video-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
