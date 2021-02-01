import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
import { HotelContext } from '../../../Context/HotelContext';
import './HotelLists.scss';
export default function HotelLists(props) {
  const apiContext = useContext(HotelContext);
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { hotels } = apiContext;
  console.log(apiContext);
  console.log(hotels);
  // useEffect(() => {
  //   const getDataApi = async () => {
  //     await axios
  //       .get(`http://localhost:5000/hotels`)
  //       .then((res) => {
  //         // setHotelData(res.data.body.searchResults.results);
  //         const apiData = res.data.data.body.searchResults.results;
  //         // console.log(apiData);
  //         setHotelData(apiData);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getDataApi();
  // }, []);
  // console.log(hotelData);

  return (
    <div className="col-md-9">
      <div className="row">
        <div className="wrap-division">
          {loading && <p>It's loading</p>}
          {!loading && (
            <>
              {hotelData.map((hotel) => (
                <div
                  className="col-md-6 col-sm-6 animate-box hotel-display"
                  key={hotel.id}
                >
                  <div className="hotel-entry">
                    <a
                      href="hotel-room.html"
                      className="hotel-img"
                      style={{ backgroundImage: `url(${hotel.thumbnailUrl})` }}
                    >
                      <p className="price">
                        <span>{hotel.ratePlan.price.current}</span>
                        <small> /night</small>
                      </p>
                    </a>
                    <div className="desc">
                      <p className="star">
                        <span>
                          <i className="icon-star-full" />
                          <i className="icon-star-full" />
                          <i className="icon-star-full" />
                          <i className="icon-star-full" />
                          <i className="icon-star-full" />
                        </span>{' '}
                        545 Reviews
                      </p>
                      <h3>
                        <a href="hotel-room.html">{hotel.name}</a>
                      </h3>
                      <span className="place">
                        {hotel.address.streetAddress},{hotel.address.locality},{' '}
                        {hotel.address.countryCode}
                      </span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
