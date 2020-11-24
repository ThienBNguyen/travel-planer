import React, { Component } from 'react';
import './FooterView.scss';
export default class FooterView extends Component {
  render() {
    return (
      <footer id="colorlib-footer" role="contentinfo">
        <div className="container">
          <div className="row row-pb-md">
            <div className="col-md-3 colorlib-widget">
              <h4>Tour Agency</h4>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
              </p>
              <p></p>
              <ul className="colorlib-social-icons">
                <li>
                  <a href="#">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-dribbble-square"></i>
                  </a>
                </li>
              </ul>
              <p />
            </div>
            <div className="col-md-2 colorlib-widget">
              <h4>Book Now</h4>
              <p></p>
              <ul className="colorlib-footer-links">
                <li>
                  <a href="#">Flight</a>
                </li>
                <li>
                  <a href="#">Hotels</a>
                </li>
                <li>
                  <a href="#">Tour</a>
                </li>
                <li>
                  <a href="#">Car Rent</a>
                </li>
                <li>
                  <a href="#">Beach &amp; Resorts</a>
                </li>
                <li>
                  <a href="#">Cruises</a>
                </li>
              </ul>
              <p />
            </div>
            <div className="col-md-2 colorlib-widget">
              <h4>Top Deals</h4>
              <p></p>
              <ul className="colorlib-footer-links">
                <li>
                  <a href="#">Edina Hotel</a>
                </li>
                <li>
                  <a href="#">Quality Suites</a>
                </li>
                <li>
                  <a href="#">The Hotel Zephyr</a>
                </li>
                <li>
                  <a href="#">Da Vinci Villa</a>
                </li>
                <li>
                  <a href="#">Hotel Epikk</a>
                </li>
              </ul>
              <p />
            </div>
            <div className="col-md-2">
              <h4>Blog Post</h4>
              <ul className="colorlib-footer-links">
                <li>
                  <a href="#">The Ultimate Packing List For Female Travelers</a>
                </li>
                <li>
                  <a href="#">
                    How These 5 People Found The Path to Their Dream Trip
                  </a>
                </li>
                <li>
                  <a href="#">
                    A Definitive Guide to the Best Dining and Drinking Venues in
                    the City
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-md-push-1">
              <h4>Contact Information</h4>
              <ul className="colorlib-footer-links">
                <li>
                  291 South 21th Street, <br /> Suite 721 New York NY 10016
                </li>
                <li>
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </li>
                <li>
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </li>
                <li>
                  <a href="#">yoursite.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is Brought To
                You By <i className="icon-heart2" aria-hidden="true" /> by
                <a href="https://colorlib.com" target="_blank">
                  Code-Projects.Org
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                <span className="block">
                  Demo Images:
                  <a href="http://unsplash.co/" target="_blank">
                    Unsplash
                  </a>
                  <a href="http://pexels.com/" target="_blank">
                    Pexels.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
