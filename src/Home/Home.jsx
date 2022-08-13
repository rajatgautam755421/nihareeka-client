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
import Testimonials from "../Testimonials/Testimonials";
import Modal from "../Modal/Modal";
import WelcomeMessage1 from "./WelcomeMessage1";
import WelcomeMessage2 from "./WelcomeMessage2";

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
      <Modal />
      <div style={{ padding: "0px 15px" }}>
        <Hero />

        <div className="row">
          <h1
            style={{ textAlign: "center", color: "#D90081", marginTop: "25px" }}
          >
            <b>Welcome Message</b>
          </h1>
          <div className="col-md-4 col-12">
            <WelcomeMessage />
          </div>
          <div className="col-md-4 col-12">
            {" "}
            <WelcomeMessage1 />
          </div>
          <div className="col-md-4 col-12 ">
            <WelcomeMessage2 />
          </div>
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
              <Course
                course={"BSc.CSIT"}
                desc="Bachelor of Science in Computer Science and Information technology (B.Sc.CSIT) provides knowledge about principles of Computer Science and Information technology."
                time="4 years|8 semesters"
                image={
                  "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654324660/Staff/WhatsApp_Image_2022-06-04_at_12.21.24_PM_x0tkhe.jpg"
                }
              />
            </div>
            <div className="beauty">
              {" "}
              <Course
                course={"BHM"}
                desc="Bachelor of Hotel Management is an undergraduate program that produces technical and social skills based on hospitality industries and catering services."
                image={
                  "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654324660/Staff/WhatsApp_Image_2022-06-04_at_12.21.24_PM_x0tkhe.jpg"
                }
                time="4 years|8 semester"
              />
            </div>
            <div className="beauty">
              {" "}
              <Course
                course={"BCA"}
                desc="Bachelor of Computer Application is a four years program spread over eight semesters. It is a program that helps to produce software developers and programmers."
                image={
                  "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654324660/Staff/WhatsApp_Image_2022-06-04_at_12.21.24_PM_x0tkhe.jpg"
                }
                time="4 years|8 semester"
              />
            </div>

            <div className="beauty">
              <Course
                course={"BIM"}
                desc="Bachelor of Information Management is four years program of Tribhuvan University that provides knowledge of Management Information and Communication System."
                image={
                  "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654324660/Staff/WhatsApp_Image_2022-06-04_at_12.21.24_PM_x0tkhe.jpg"
                }
                time="4 years|8 semester"
              />
            </div>
            <div className="beauty">
              <Course
                course={"BBS"}
                time="4 years"
                desc="
Bachelor of Business Studies or BBS is an undergraduate degree based on semesterwise program that provides in depth studies of business and helps to build the set of business related skills."
                image={
                  "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325756/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.40.34_PM_m4cmji.jpg"
                }
              />
            </div>
            <div className="beauty">
              {" "}
              <Course
                course={"MBS"}
                desc="Masters of Business Studies is a two years graduate level program in Business and Management."
                time="2 years|4 semester"
                image={
                  "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654326053/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.45.34_PM_qubsqr.jpg"
                }
              />
            </div>
          </Carousel>
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default Home;
