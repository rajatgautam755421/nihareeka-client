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
              src="https://logos-world.net/wp-content/uploads/2021/08/Cisco-Logo.png"
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
              src=" https://www.nepalitelecom.com/wp-content/uploads/2020/05/Nepal-Telecom.jpg"
            />{" "}
          </div>
          <div className="col-md-2 col-6 logobox">
            {" "}
            <img
              className="hovereffect"
              alt=""
              src=" https://www.unilevernepal.com/_nuxt/img/logo-static.0528ecc.svg"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
