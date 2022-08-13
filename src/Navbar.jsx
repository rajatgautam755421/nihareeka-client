import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Spin as Hamburger1 } from "hamburger-react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Sidenav from "./SideNav/Sidenav";
import { useLocation } from "react-router-dom";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Notification from "./Notification/Notification";
import axios from "axios";
import Loader from "./Loader";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Badge, Tooltip } from "@mui/material";
import { ENDPOINT } from "./GlobalVariables";

const Navbar = ({ clicked, setClicked }) => {
  console.log(clicked);
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [noti, setNoti] = useState(false);
  const [show, setShow] = useState([]);
  const [badge, setBadge] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRestore = () => {
    window.scrollTo(0, 0);
  };

  const userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    setNoti(false);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios.get(`${ENDPOINT}/api/v1/notification`);
      try {
        setLoading(true);
        setShow(data[0]);
        console.log(show.notification);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getData();
  }, [clicked, pathname]);
  useEffect(() => {
    if (show.notification === true) {
      setBadge(true);
    } else if (show.notification === false) {
      setBadge(false);
    }
  });

  useEffect(() => {
    setOpenSideNav(false);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {openSideNav && (
        <Sidenav setOpenSideNav={setOpenSideNav} setOpen={setOpen} />
      )}

      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ opacity: "1" }}
      >
        <div className="container-fluid">
          <NavLink to="/" style={{ textDecoration: "none", border: "none" }}>
            <img
              src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322885/Faculty%20Members/title_ab0jmz.png"
              alt=""
              srcset=""
              className="college__logo__main"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <Hamburger />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto  mb-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item" style={{ margin: "0px auto" }}>
                <NavLink
                  aria-current="page"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "activee nav-link" : "inactive nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul
                  className="dropdown-menu secondary__drop"
                  aria-labelledby="navbarDropdown"
                  style={{ border: "none" }}
                >
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/csit">
                      BSc.CSIT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bim">
                      BIM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bca">
                      BCA
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bhm">
                      BHM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bbs">
                      BBS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/mbs">
                      MBS
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activee nav-link" : "inactive nav-link"
                  }
                  to="/contact-us"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul
                  className="dropdown-menu secondary__drop"
                  aria-labelledby="navbarDropdown"
                  style={{ border: "none" }}
                >
                  <li>
                    <NavLink className="dropdown-item" to="about-us">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/about-management">
                      Management Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty-members">
                      Faculty Member
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/devlopers">
                      Devlopers
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activee nav-link" : "inactive nav-link"
                  }
                  to="/online-admission"
                >
                  Online Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activee nav-link" : "inactive nav-link"
                  }
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activee nav-link" : "inactive nav-link"
                  }
                  to="news-event"
                >
                  News And Results
                </NavLink>
              </li>

              {loading ? (
                <>
                  <li>
                    <a className="nav-link search">
                      <TailSpin
                        color="#000"
                        height={30}
                        width={30}
                        timeout={3500}
                      />
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {userInfo && (
                    <>
                      <li className={badge ? "Active__Badge" : null}>
                        <a className="nav-link search">
                          <Tooltip title="Notifications">
                            {badge ? (
                              <Badge badgeContent={1} color="success">
                                <CircleNotificationsIcon
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => setNoti(!noti)}
                                />
                              </Badge>
                            ) : (
                              <CircleNotificationsOutlinedIcon
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  cursor: "pointer",
                                }}
                                onClick={() => setNoti(!noti)}
                              />
                            )}
                          </Tooltip>
                        </a>
                      </li>
                    </>
                  )}
                </>
              )}
              {noti && (
                <Notification
                  badge={badge}
                  setBadge={setBadge}
                  clicked={clicked}
                  setClicked={setClicked}
                />
              )}
              <li className="  ">
                <a
                  className="nav-link menu  "
                  onClick={() => {
                    setOpenSideNav(!openSideNav);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Hamburger1
                    toggled={isOpen}
                    toggle={setOpen}
                    pathname={pathname}
                    onCLick={handleRestore}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
