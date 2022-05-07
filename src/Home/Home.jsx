import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Course from "../Course/Course";
import WelcomeMessage from "./WelcomeMessage";
import News from "./News";
import Partners from "./Partners";
import BIT from "../assets/CSIT/library.JPG";
import BIM from "../assets/BIM/BIM.JPG";
import CSIT from "../assets/CSIT/CSIT.JPG";
import BCA from "../assets/BCA/BCA.JPG";
import NoticeModel from "../NoticeModel/NoticeModel";

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    setShowModal(true);
  }, []);
  return (
    <>
      <div style={{ padding: "0px 15px" }}>
        <Hero />

        <div className="row">
          <div className="col-md-3 col-12"></div>
          <div className="col-md-6 col-12">
            {" "}
            <WelcomeMessage />
          </div>
          <div className="col-md-3 col-12 "></div>
        </div>

        <News />
        <Partners />

        <div className="Course_Carousel">
          <h1
            style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
          >
            <MenuBookIcon fontSize="large" style={{ color: "#D90081" }} />{" "}
            <b>Course</b>
          </h1>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all  .5"
            transitionDuration={1500}
            containerClass="carousel-container"
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="beauty">
              {" "}
              <Course course={"Bsc.CSIT"} image={CSIT} />
            </div>
            <div className="beauty">
              {" "}
              <Course course={"BBS"} image={BIM} />
            </div>
            <div className="beauty">
              {" "}
              <Course course={"BIM"} image={BIT} />
            </div>

            <div className="beauty">
              <Course course={"BHM"} image={BCA} />
            </div>
            <div className="beauty">
              {" "}
              <Course course={"BIT"} image={CSIT} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
