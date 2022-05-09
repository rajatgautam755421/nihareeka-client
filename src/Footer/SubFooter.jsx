import React from "react";
import "./SubFooter.css";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const SubFooter = ({
  heading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  linkto2,
  linkto1,
  linkto3,
  linkto4,
  linkto6,
  linkto5,
}) => {
  return (
    <div className=" w-full px-1 main__sub__footer " style={{ color: "white" }}>
      <h2
        className="title-font font-xl text-gray-900 tracking-widest text-sm mb-3"
        style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
      >
        {heading}
      </h2>
      <nav className="list-none mb-10">
        {heading === "Quick Contact" ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <li style={{ margin: "5px 0px" }}>
              <EmailIcon /> {link1}
            </li>
          </div>
        ) : (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={linkto1} className="Pulse footer__links">
                {link1}
              </Link>
            </li>
          </div>
        )}
        {heading === "Quick Contact" ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <li style={{ margin: "5px 0px" }}>
              <LocalPhoneIcon /> {link2}
            </li>
          </div>
        ) : (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={linkto2} className="footer__links">
                {link2}
              </Link>
            </li>
          </div>
        )}
        {heading === "Quick Contact" ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <li style={{ margin: "5px 0px" }}>
              <LocationOnIcon /> {link3}
            </li>
          </div>
        ) : (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={linkto3} className="footer__links">
                {link3}
              </Link>
            </li>
          </div>
        )}
        {heading === "Quick Contact" ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <li style={{ margin: "5px 0px" }}>
              <AccessTimeIcon /> {link4}
            </li>
          </div>
        ) : (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={linkto4} className="footer__links">
                {link4}
              </Link>
            </li>
          </div>
        )}
        {link5 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={linkto5} className="footer__links">
                {link5}
              </Link>
            </li>
          </div>
        ) : null}{" "}
        {link6 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <a href="#link" className="footer__links">
                {link6}
              </a>
            </li>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default SubFooter;
