import React from "react";
import "./CareerDetails.css";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const CareerDetails = ({ courseName }) => {
  return (
    <>
      <h1 style={{ marginTop: "50px", textAlign: "center", color: "#ec008d" }}>
        Career Outcomes
      </h1>

      {courseName
        ? courseName === "BBS" && (
            <div className="container" style={{ marginTop: "40px" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Product Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Office Administrator</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Company Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Finance Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Banking Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Human Resource Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Accountant</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Financial Advisor</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Marketer</h5>
                  </div>
                </div>
                <div className="col-md-8" style={{ marginTop: "20px" }}>
                  <img
                    src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325163/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.30.35_PM_g90xs4.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          )
        : null}

      {courseName
        ? courseName === "BCA" && (
            <div className="container" style={{ marginTop: "40px" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Software Developer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Technical Support</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>IT Analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Web Developer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Junior Analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Computer Support Service Specialist</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Software Publisher</h5>
                  </div>
                </div>
                <div className="col-md-8" style={{ marginTop: "20px" }}>
                  <img src={Image} alt="" srcset="" />
                </div>
              </div>
            </div>
          )
        : null}
      {courseName
        ? courseName === "BIM" && (
            <div className="container" style={{ marginTop: "40px" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Software Developer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Technical Support</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>IT Analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Web Developer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Junior Analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Computer Support Service Specialist</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Software Publisher</h5>
                  </div>
                </div>
                <div className="col-md-8" style={{ marginTop: "20px" }}>
                  <img src={Image} alt="" srcset="" />
                </div>
              </div>
            </div>
          )
        : null}
      {courseName
        ? courseName === "MBS" && (
            <div className="container" style={{ marginTop: "40px" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Accountant</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Banker</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Trade Analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Data Analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Junior Analyst</h5>
                  </div>

                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Publisher</h5>
                  </div>
                </div>
                <div className="col-md-8" style={{ marginTop: "20px" }}>
                  <img src={Image} alt="" srcset="" />
                </div>
              </div>
            </div>
          )
        : null}

      {courseName
        ? courseName === "BHM" && (
            <div className="container" style={{ marginTop: "40px" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>General Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Residential Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Tourism Officer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Executive Housekeeper</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Front Office Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Human Resource Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Convention Service Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Chef</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Cook</h5>
                  </div>
                </div>
                <div className="col-md-8" style={{ marginTop: "20px" }}>
                  <img src={Image} alt="" srcset="" />
                </div>
              </div>
            </div>
          )
        : null}

      {courseName
        ? courseName === "Bsc.CSIT" && (
            <div className="container" style={{ marginTop: "40px" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Entrepreneur</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Information system manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Cryptographer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>System analyst</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Technical writer</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Human Resource Manager</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Database operator</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Teacher</h5>
                  </div>
                  <div className="container career__main__col">
                    <CheckCircleOutlinedIcon className="requirements__main__icon" />
                    <h5>Principal</h5>
                  </div>
                </div>
                <div className="col-md-8" style={{ marginTop: "20px" }}>
                  <img src={Image} alt="" srcset="" />
                </div>
              </div>
            </div>
          )
        : null}
    </>
  );
};

export default CareerDetails;
