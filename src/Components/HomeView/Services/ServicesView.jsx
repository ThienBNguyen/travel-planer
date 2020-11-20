import React from 'react';
import './ServicesView.scss';
export default function ServicesView() {
  return (
    <div id="colorlib-services">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-3 animate-box text-center aside-stretch">
            <div className="services">
              <span className="icon">
                <i className="fas fa-globe-europe"></i>
              </span>
              <h3>Amazing Travel</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies
              </p>
            </div>
          </div>
          <div className="col-md-3 animate-box text-center">
            <div className="services">
              <span className="icon">
                <i className="fas fa-ship"></i>
              </span>
              <h3>Our Cruises</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies
              </p>
            </div>
          </div>
          <div className="col-md-3 animate-box text-center">
            <div className="services">
              <span className="icon">
                <i className="fas fa-car"></i>
              </span>
              <h3>Book Your Trip</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies
              </p>
            </div>
          </div>
          <div className="col-md-3 animate-box text-center">
            <div className="services">
              <span className="icon">
                <i className="fas fa-mail-bulk"></i>
              </span>
              <h3>Nice Support</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
