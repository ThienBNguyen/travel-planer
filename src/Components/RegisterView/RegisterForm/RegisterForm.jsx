import React from 'react';

export default function RegisterForm() {
  return (
    <div>
      <div className="container login-container">
        <div className="row ">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="login-card-body card card-signin my-5">
              <div className="card-body ">
                <h5 className="card-title text-center sign-in-text">Sign up</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="firstname"
                      id="inputEmail"
                      className="form-control"
                      placeholder="First Name"
                      required
                      autofocus

                      // value={this.state.email}
                      // onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                      type="lastname"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Last Name"
                      required
                      autofocus
                      // value={this.state.email}
                      // onChange={this.onChangeEmail}
                    />
                  </div>{' '}
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email"
                      required
                      autofocus
                      // value={this.state.email}
                      // onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                      // value={this.state.password}
                      // onChange={this.onChangePassword}
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    //   onClick={this.handleSubmit}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
