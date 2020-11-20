import React from 'react';

export default function CarTab() {
  return (
    <div id="car" className="tab-pane ">
      <form method="post" className="colorlib-form">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="date">Where:</label>
              <div className="form-field">
                <input
                  type="text"
                  id="location"
                  className="form-control"
                  placeholder="Search Location"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="date">Start Date:</label>
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
              <label htmlFor="date">Return Date:</label>
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
            <input
              type="submit"
              name="submit"
              id="submit"
              defaultValue="Find Car"
              className="btn btn-primary btn-block"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
