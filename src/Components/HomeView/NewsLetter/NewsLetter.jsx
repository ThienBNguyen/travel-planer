import React from 'react';

export default function NewsLetter() {
  return (
    <div id="colorlib-subscribe">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
            <h2>Sign Up for a Newsletter</h2>
            <p>
              Sign up for our mailing list to get latest updates and offers.
            </p>
            <form className="form-inline qbstp-header-subscribe">
              <div className="row">
                <div className="col-md-12 col-md-offset-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
