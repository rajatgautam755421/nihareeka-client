import React, { useEffect, useState } from "react";
import "./CourseDetails.css";

const CourseDetails = ({ courseName }) => {
  const [hlink, setHlink] = useState("");

  useEffect(() => {
    if (courseName === "BCA") {
      setHlink(
        "https://www.collegenote.net/courses/BCA/all-courses/#gsc.tab=0"
      );
    } else if (courseName === "MBS") {
      setHlink("https://www.collegesnepal.com/syllabus/mbs/");
    } else if (courseName === "Bsc.CSIT") {
      setHlink(
        "https://www.collegenote.net/courses/CSIT/all-courses/#gsc.tab=0"
      );
    } else if (courseName === "BIM") {
      setHlink("https://www.collegesnepal.com/syllabus/bim/");
    } else if (courseName === "MBS") {
      setHlink("https://www.collegesnepal.com/syllabus/mbs/");
    } else if (courseName === "BHM") {
      setHlink("https://www.collegesnepal.com/syllabus/bhm/");
    }
  }, []);
  return (
    <>
      <div className="container mt-4">
        {courseName === "MBS" ? (
          <>
            <div className="row">
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 1</h4>
                </a>
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 2</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 3</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 4</h4>
                </a>{" "}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 1</h4>
                </a>
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 2</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 3</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 4</h4>
                </a>{" "}
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 5</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 6</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 7</h4>
                </a>{" "}
              </div>
              <div className="col-md-3 col-6 text-center courses__name__main">
                <a href={hlink} target="_blank">
                  <h4>Sem 8</h4>
                </a>{" "}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CourseDetails;
