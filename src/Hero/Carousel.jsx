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
      </div>
    </>
  );
};

export default Carousel;
