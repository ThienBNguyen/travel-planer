import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HotelDetail() {
  const [HotelDetails, setHotelDetail] = useState([]);
  const [hotelImg, setHotelImg] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getHotelDetail = async () => {
      await axios
        .get(`http://localhost:5000/hoteldetail/`)
        .then((res) => {
          // setHotelData(res.data.body.searchResults.results);
          const apiData = res.data.data.body;
          console.log(apiData);
          setHotelDetail(apiData);
          setLoading(false);
          //   console.log(apiData);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHotelDetail();
  }, []);

  useEffect(() => {
    const getHotelImage = async () => {
      await axios
        .get(`http://localhost:5000/hotelimage/`)
        .then((res) => {
          // setHotelData(res.data.body.searchResults.results);
          const hotelImage = res.data;
          // console.log(apiData);
          setHotelImg(hotelImage);
          setLoading(false);
          console.log(hotelImage.roomImages);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getHotelImage();
  }, []);

  //   HotelDetails.map((hotel) => {
  //     console.log(hotel);
  //   });
  //   console.log(hotelImg.roomImages);
  //   console.log(HotelDetails.roomsAndRates);

  //   Object.keys(hotelRoomName).map((key, index) => {
  //     console.log(hotelRoomName[key]);
  //   });
  const hotelRoomName = HotelDetails.propertyDescription.roomTypeNames;
  const hotelImgApi = hotelImg.roomImages;
  //   hotelImgApi.map((img) => {
  //     let str = img.images[0].baseUrl;
  //     let res = str.replace('{size}', 'w');
  //     console.log(res);
  //   });
  const test = hotelImgApi;
  console.log(test);
  return (
    <div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-12">
            <div className="wrap-division">
              <div className="col-md-12 col-md-offset-0 heading2 animate-box">
                <h2>{HotelDetails.propertyDescription.name}</h2>
              </div>
              <div className="row">
                {loading && <p>It's loading</p>}
                {!loading && (
                  <>
                    {Object.keys(hotelRoomName).map((key, index) => (
                      <div className="col-md-12 animate-box">
                        <div className="room-wrap">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              {hotelImgApi.map((img) => {
                                let str = img.images[0].baseUrl;
                                let res = str.replace('{size}', 'w');
                                <div
                                  className="room-img"
                                  style={{
                                    backgroundImage: `url(${res})`,
                                  }}
                                />;
                              })}
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="desc">
                                <h2>{hotelRoomName[key]}</h2>
                                <p className="price">
                                  <span>$45</span> <small>/ night</small>
                                </p>
                                <p>
                                  Even the all-powerful Pointing has no control
                                  about the blind texts it is an almost
                                  unorthographic life One day however a small
                                  line of blind text by the name of Lorem Ipsum
                                  decided to leave for the far World of Grammar.
                                </p>
                                <p>
                                  <a href="!#" className="btn btn-primary">
                                    Book Now!
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {hotelImgApi.map((img) => {
        let str = img.images[0].baseUrl;
        let res = str.replace('{size}', 'w');
        <div
          className="room-img"
          style={{
            backgroundImage: `url(${res})`,
          }}
        >
          <img src="" alt="" />
          {console.log(res)}
        </div>;
      })}
    </div>
  );
}
