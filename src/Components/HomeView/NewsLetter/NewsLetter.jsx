import React from 'react';

export default function NewsLetter() {
  return (
    <div id="colorlib-subscribe">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
            <h2>Sign Up for a Newsletter</h2>
            <p>
              Sign up for our mailing list to get latest updates and offers.
            </p>
            <form class="form-inline qbstp-header-subscribe">
              <div class="row">
                <div class="col-md-12 col-md-offset-0">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" class="btn btn-primary">
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
