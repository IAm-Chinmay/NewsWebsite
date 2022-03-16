
import img1 from './images/news1img.jfif';
import img2 from './images/news2img.jfif';
import img3 from './images/news3img.jfif';

import React, { Component } from 'react'

export default class Sliding extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={img1} className="d-block w-100" alt="IMG1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>NEWS IN YOUR POCKET.</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img2} className="d-block w-100" alt="IMG2" />
              <div className="carousel-caption d-none d-md-block">
                <h5> NEWS ANYTIME ANYWHERE</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img3} className="d-block w-100" alt="IMG3" />
              <div className="carousel-caption d-none d-md-block">
                <h5> LATEST NEWS ONLY HERE</h5>
              </div>
            </div>
          </div>


          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  }
}

