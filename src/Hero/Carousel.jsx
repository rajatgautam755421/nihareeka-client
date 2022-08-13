import React from "react";
import "./Hero.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-interval="1"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654769670/Staff/library2-min_tbrlaq.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325163/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.30.35_PM_g90xs4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654769666/Staff/library-min_b2pbdn.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*     
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner   ">
          <div className="carousel-item  active">
            <img
              src={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325163/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.30.35_PM_g90xs4.jpg"
              }
              className="d-block w-100 Image photobody "
              alt="..."
            />
            <div className="row">
              <div className="col">
                <div className="carousel-caption  d-md-block  artigo_nome  image-title ">
                  <h3>Well Qualified Teacher with well furnished classes.</h3>
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
                <div className="carousel-caption  d-md-block  artigo_nome  image-title ">
                  <h3>Best IT College in Province 1</h3>
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
                <div className="carousel-caption  d-md-block  artigo_nome  image-title ">
                  <h3> Leading IT college in Estern Region of Nepal</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Carousel;
