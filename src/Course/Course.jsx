import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Course.css";

const Course = ({ course, image }) => {
  return (
    <>
      <section className="testimonials">
        <div id="customers-testimonials" className="owl-carousel">
          <div className="item">
            <div className="shadow-effect">
              <img
                style={{
                  borderBottomLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
                className="img-responsive"
                src={image}
                alt=""
              />
              <div className="item-details">
                <h3 style={{ color: "#1d67a8" }}>{course}</h3>
                <p>
                  Information technology (IT) is the use of computers to create,
                  process, store, retrieve, and exchange all kinds of electronic
                  data and information.
                </p>
                <hr className="horizontalLine" />
                <h6 style={{ color: "#682285" }}>
                  <AccessTimeIcon /> Duration:{" "}
                  <span style={{ color: "#f54278" }}>4 years|8 semesters</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
