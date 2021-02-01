// import axios from 'axios';
import React, { Component } from 'react';
import { HotelContext } from '../../../../Context/HotelContext';

export default class HotelTab extends Component {
  static contextType = HotelContext;
  // static propTypes = {
  //   fetchHotels: this.propTypes.func.isRequired,
  // };

  handleSubmit = (e) => {
    const { fetchHotels } = this.context;

    e.preventDefault();

    const location = this.location.value;
    const checkIn = this.checkIn.value;
    const checkOut = this.checkOut.value;
    // fetchHotels(location, checkIn, checkOut);
    console.log(fetchHotels(location, checkIn, checkOut));
    // this.props.fetchHotels(location, checkIn, checkOut);
    // console.log(location);
    // console.log(checkIn);
    // console.log(checkOut);
    // console.log(fetchHotels);
    // this.props.history.push('/hotels');
    setTimeout(function () {
      window.location.href = '/hotels';
    }, 10000);
  };

  render() {
    return (
      <div id="hotel" className="tab-pane ">
        <form method="post" className="colorlib-form">
          <div className="row">
            <div className="col-md-2">
              <div className="form-group">
                <label htmlFor="date">Where:</label>
                <div className="form-field">
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Search Location"
                    // value={location}
                    // onChange={(e) => setLocation(e.target.value)}
                    ref={(location) => {
                      this.location = location;
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="date">Check-in:</label>
                <div className="form-field">
                  <i className="icon icon-calendar2" />
                  <input
                    type="date"
                    id="date"
                    className="form-control date"
                    placeholder="Check-in date"
                    // value={checkIn}
                    // onChange={(e) => setCheckIn(e.target.value)}
                    ref={(checkIn) => {
                      this.checkIn = checkIn;
                    }}
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
                    type="date"
                    id="date"
                    className="form-control date"
                    placeholder="Check-out date"
                    // value={checkOut}
                    // onChange={(e) => setCheckOut(e.target.value)}
                    ref={(checkOut) => {
                      this.checkOut = checkOut;
                    }}
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
                value="Submit"
                name="submit"
                id="submit"
                defaultValue="Find Hotel"
                className="btn btn-primary btn-block"
                // onSubmit={handleSubmit}
                onClick={(e) => this.handleSubmit(e)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// export default function HotelTab() {
//   const [location, setLocation] = useState('');
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');

//   const history = useHistory();

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     // const location = { location };
//     // const checkIn = { checkIn };
//     // const checkOut = { checkOut };
//     console.log(location);
//     this.props.fetchHotels(location, checkIn, checkOut);
// axios
//   .get('http://localhost:5000/hotels/', {
//     params: {
//       data: [{ location }, { checkIn }, { checkOut }],
//     },
//   })
//   .then((res) => {
//     const test = res.data;
//     console.log(test);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// axios
//   .post('http://localhost:5000/hotels', data)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// };
// const handleClick = () => {
//   history.push('/hotels');
// };
//   return (

//   );
// }
