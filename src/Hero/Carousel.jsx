import React from "react";
import "./Hero.css";
import photo from "../assets/CSIT/library2.JPG";
import photo1 from "../assets/CSIT/library.JPG";
import Carousel3 from "../assets/BBS/Carousel3.JPG";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner   ">
          <div className="carousel-item  active">
            <img
              src={photo}
              className="d-block w-100 Image photobody "
              alt="..."
            />
            <div className="row">
              <div className="col">
                <div className="carousel-caption  d-md-block image-title ">
                  <h5 className="Title">
                    Well trained teachers and Friendly environment
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={photo1}
              className="d-block w-100 Image photobody"
              alt="..."
            />{" "}
            <div className="row">
              <div className="col">
                <div className="carousel-caption  d-md-block image-title  bordercss">
                  <h5 className="Title">
                    Nihareeka is No. 1 college in Provience 1
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel3}
              className="d-block w-100 Image photobody"
              alt="..."
            />{" "}
            <div className="row">
              <div className="col">
                <div className="carousel-caption  d-md-block image-title  bordercss">
                  <h5 className="Title">
                    Leading IT college in Estern Region of Nepal
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
