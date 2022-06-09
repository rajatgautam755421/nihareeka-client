import React from "react";
import "./Bba.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Tabs from "./Tabs/Tabs";

const Bba = ({ courseName, images, loading }) => {
  return (
    <>
      <div className="container-fluid faculty__main__image">
        <div className="container faculty__main__bba">
          <AccountBalanceIcon className="faculty__main__icon" />
        </div>
        <h1 style={{ color: "#0D0D80", position: "relative" }}>
          {courseName ? courseName : null}
        </h1>
      </div>
      <Tabs courseName={courseName} images={images} loading={loading} />
    </>
  );
};

export default Bba;
