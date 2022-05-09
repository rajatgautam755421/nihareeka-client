import React from "react";
import "./NoPage.css";

const NoPage = () => {
  return (
    <>
      <h4 style={{ textAlign: "center", color: "#D90081", padding: "40px" }}>
        {/* <EventIcon fontSize="large" style={{ color: "#390081" }} />{" "} */}
        <b>Page Not Found</b>
      </h4>
      <div className="container" style={{ width: "100%" }}>
        <img
          src="https://digitalagencynetwork.com/wp-content/uploads/2019/08/best-digital-agency-404-pages-for-your-inspiration.jpg"
          alt=""
          srcset=""
          className="image__no__page"
        />
      </div>
    </>
  );
};

export default NoPage;
