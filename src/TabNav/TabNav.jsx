import React, { useEffect, useState } from "react";
import "./TabNav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { NavLink, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import MobileNotification from "../Notification/MobileNotification";
import axios from "axios";
const TabNav = ({ clicked, setClicked }) => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [badge, setBadge] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    const fetchUser = () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
    };
    fetchUser();
  }, [pathname]);

  const handleClick = () => {
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      {show && (
        <MobileNotification
          badge={badge}
          setBadge={setBadge}
          clicked={clicked}
          setClicked={setClicked}
        />
      )}
      <div className="container-fluid tabnav__main">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active__tab" : "inactive__tab"
          }
        >
          <HomeOutlinedIcon
            style={{
              color: "white",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
            className="tab__nav__icon"
          />
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "active__tab" : "inactive__tab"
          }
        >
          <CallOutlinedIcon
            style={{
              color: "white",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
            className="tab__nav__icon"
          />
        </NavLink>
        {pathname === "/admin-panel" ? (
          <NavLink to="/dashboard-login" className="black__tab__main">
            <AdminPanelSettingsOutlinedIcon
              style={{
                color: "white",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                color: "black",
              }}
              className="tab__nav__icon"
            />
          </NavLink>
        ) : (
          <NavLink to="/dashboard-login" className="white__tab__main">
            <AdminPanelSettingsOutlinedIcon
              style={{
                color: "white",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                color: "white",
              }}
              className="tab__nav__icon"
            />
          </NavLink>
        )}

        {user ? (
          <a href="/" onClick={handleClick}>
            <LogoutIcon
              style={{
                color: "white",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
              className="tab__nav__icon"
            />
          </a>
        ) : null}
      </div>
    </>
  );
};

export default TabNav;
