import React from "react";
import "./Home.css";

const Partners = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 style={{ textAlign: "center", color: "#D90081", padding: "40px" }}>
          <b>Global Partners</b>
        </h1>
        <div className="row">
          <div className="col-md-2  col-6 logobox">
            <img
              className="hovereffect"
              alt=""
              src="https://www.f1soft.com/img/logos/logo-09.png"
            />
          </div>
          <div className="col-md-2 col-6 logobox">
            {" "}
            <img
              className="hovereffect"
              alt=""
              src=" https://www.nepalitimes.com/wp-content/uploads/2021/07/Esewa-Remittance-Payment.png"
            />{" "}
          </div>
          <div className="col-md-2 col-6 logobox">
            {" "}
            <img
              className="hovereffect"
              alt=""
              src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654326218/Faculty%20Members/logo-dark_f8tdyz.png"
            />{" "}
          </div>
          <div className="col-md-2 col-6 logobox">
            {" "}
            <img
              className="hovereffect"
              alt=""
              src=" https://res.cloudinary.com/mechi-pharma123/image/upload/v1654326410/Faculty%20Members/taj-transparent-logo_xedfzl.png"
            />{" "}
          </div>
          <div className="col-md-2 col-6 logobox">
            {" "}
            <img
              className="hovereffect"
              alt=""
              src="https://nepalicontacts.com/wp-content/uploads/2019/07/Hotel-Annapurna-pp-1.png"
            />{" "}
          </div>
          <div className="col-md-2 col-6 logobox">
            {" "}
            <img
              className="hovereffect"
              alt=""
              src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654326342/Faculty%20Members/download_npzrq0.jpg"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
