import React from 'react';
import './TestimonyView.scss';
import person1 from '../../../resouces/images/person1.jpg';
import person2 from '../../../resouces/images/person2.jpg';
import person3 from '../../../resouces/images/person3.jpg';
import AliceCarousel from 'react-alice-carousel';

export default function TestimonyView() {
  return (
    <div>
      <div id="colorlib-testimony" className="colorlib-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
              <h2>Our Satisfied Guests says</h2>
              <p className="heading-margin">
                We love to tell our successful far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 animate-box">
              <div className="owl-carousel2">
                <AliceCarousel
                  infinite
                  autoPlay
                  disableDotsControls
                  autoPlayInterval="5000"
                  disableButtonsControls
                >
                  <div className="item">
                    <div className="testimony text-center">
                      <span
                        className="img-user"
                        style={{ backgroundImage: `url(${person1})` }}
                      />
                      <span className="user">Alysha Myers</span>
                      <small>Miami Florida, USA</small>
                      <blockquote>
                        <p>
                          " A small river named Duden flows by their place and
                          supplies it with the necessary regelialia.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony text-center">
                      <span
                        className="img-user"
                        style={{ backgroundImage: `url(${person2})` }}
                      />
                      <span className="user">James Fisher</span>
                      <small>New York, USA</small>
                      <blockquote>
                        <p>
                          One day however a small line of blind text by the name
                          of Lorem Ipsum decided to leave for the far World of
                          Grammar.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony text-center">
                      <span
                        className="img-user"
                        style={{ backgroundImage: `url(${person3})` }}
                      />
                      <span className="user">Jacob Webb</span>
                      <small>Athens, Greece</small>
                      <blockquote>
                        <p>
                          Alphabet Village and the subline of her own road, the
                          Line Lane. Pityful a rethoric question ran over her
                          cheek, then she continued her way.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </AliceCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
