import React from 'react';
import './BlogView.scss';
import blog1 from '../../../resouces/images/blog-1.jpg';
import blog2 from '../../../resouces/images/blog-2.jpg';
import blog3 from '../../../resouces/images/blog-3.jpg';
import blog4 from '../../../resouces/images/blog-4.jpg';
// import blog1 from '../../../resouces/images/blog-1.jpg';
export default function BlogView() {
  return (
    <div id="colorlib-blog">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
            <h2>Recent Blog</h2>
            <p className="heading-margin">
              We love to tell our successful far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts.
            </p>
          </div>
        </div>
        <div className="blog-flex">
          <div
            className="f-entry-img"
            style={{ backgroundImage: `url(${blog2})` }}
          />
          <div className="blog-entry aside-stretch-right">
            <div className="row">
              <div className="col-md-12 animate-box">
                <a href="blog.html" className="blog-post">
                  <span
                    className="img"
                    style={{ backgroundImage: `url(${blog1})` }}
                  />
                  <div className="desc">
                    <span className="date">Feb 22, 2018</span>
                    <h3>A Definitive Guide to the Best Dining</h3>
                    <span className="cat">Activities</span>
                  </div>
                </a>
              </div>
              <div className="col-md-12 animate-box">
                <a href="blog.html" className="blog-post">
                  <span
                    className="img"
                    style={{ backgroundImage: `url(${blog3})` }}
                  />
                  <div className="desc">
                    <span className="date">Feb 22, 2018</span>
                    <h3>
                      How These 5 People Found The Path to Their Dream Trip
                    </h3>
                    <span className="cat">Activities</span>
                  </div>
                </a>
              </div>
              <div className="col-md-12 animate-box">
                <a href="blog.html" className="blog-post">
                  <span
                    className="img"
                    style={{ backgroundImage: `url(${blog4})` }}
                  />
                  <div className="desc">
                    <span className="date">Feb 22, 2018</span>
                    <h3>Our Secret Island Boat Tour Is just for You</h3>
                    <span className="cat">Activities</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
