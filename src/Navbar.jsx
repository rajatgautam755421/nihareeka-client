import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Spin as Hamburger1 } from "hamburger-react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import Sidenav from "./SideNav/Sidenav";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  console.log(pathname);
  console.log(isOpen);
  const [openSideNav, setOpenSideNav] = useState(false);

  const handleRestore = () => {
    window.scrollTo(0, 0);
  };

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
          <img
            src="https://nihareekacollege.edu.np/templates/nihareekacollegeofmanagementandit/images/title.png"
            alt=""
            srcset=""
            className="college__logo__main"
          />
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
                    isActive ? "active nav-link" : "inactive nav-link"
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
                  Faculties
                </a>
                <ul
                  className="dropdown-menu secondary__drop"
                  aria-labelledby="navbarDropdown"
                  style={{ border: "none" }}
                >
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/csit">
                      Bsc.CSIT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bca">
                      BCA
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bbs">
                      BBS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/faculty/bhm">
                      BHM
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact-us">
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
                <NavLink className="nav-link " to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="news-event">
                  News And Events
                </NavLink>
              </li>
              {pathname === "/news-event" && (
                <li className="  ">
                  <a className="nav-link search" href="#search__main__id">
                    <SearchIcon />
                  </a>
                </li>
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
