import React from 'react';

export default function HotelTab() {
  return (
    <div id="hotel" className="tab-pane ">
      <form method="post" className="colorlib-form">
        <div className="row">
          <div className="col-md-2">
            <div className="booknow">
              <h2>Book Now</h2>
              <span>Best Price Online</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="date">Check-in:</label>
              <div className="form-field">
                <i className="icon icon-calendar2" />
                <input
                  type="text"
                  id="date"
                  className="form-control date"
                  placeholder="Check-in date"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="date">Check-out:</label>
              <div className="form-field">
                <i className="icon icon-calendar2" />
                <input
                  type="text"
                  id="date"
                  className="form-control date"
                  placeholder="Check-out date"
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="guests">Guest</label>
              <div className="form-field">
                <i className="icon icon-arrow-down3" />
                <select name="people" id="people" className="form-control">
                  <option value="#">1</option>
                  <option value="#">2</option>
                  <option value="#">3</option>
                  <option value="#">4</option>
                  <option value="#">5+</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              name="submit"
              id="submit"
              defaultValue="Find Hotel"
              className="btn btn-primary btn-block"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
