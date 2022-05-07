import React from "react";
import "./PageInfo.css";

const PageInfo = ({ title, Icon }) => {
  return (
    <>
      <div className="container-fluid pageinfo__main__image">
        <div className="container pageinfo__main__bba">
          <Icon className="pageinfo__main__icon" />
        </div>
        <h1 style={{ color: "#0D0D80", position: "relative" }}>{title}</h1>
      </div>
    </>
  );
};

export default PageInfo;
