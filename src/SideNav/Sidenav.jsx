import React, { useEffect, useState } from "react";
import "./Sidenav.css";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidenav = ({ setOpenSideNav, setOpen }) => {
  const [user, setUser] = useState({});
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
      <div
        style={{
          position: "absolute",
          zIndex: "100",
          backgroundColor: "white",
          boxShadow: "3px 3px lightgrey",
        }}
        className="flex h-screen overflow-hidden bg-white "
      >
        <div className="hidden md:flex md:flex-shrink-0 ">
          <div className="flex flex-col  sidenav_body ">
            <div
              className="
        flex flex-col flex-grow
        pt-5
        overflow-y-auto
        border-r
        bg-neutral-800
      "
            >
              <div
                className="slideIn"
                onClick={() => {
                  setOpenSideNav(false);
                  setOpen(false);
                }}
              >
                <CloseIcon
                  style={{
                    cursor: "pointer",
                    width: "30px",
                    height: "30px",
                    float: "right",
                    marginTop: "-36px",
                  }}
                  className="close__sidenav"
                />
              </div>
              <Link
                to="/about-us"
                className="px-2 text-left focus:outline-none"
                style={{
                  textDecoration: "none",
                  color: "#2C499F",
                  fontWeight: "500",
                }}
              >
                <div className="flex flex-col items-center flex-shrink-0 px-4">
                  <h2
                    className="
              block
              p-2
              text-xl
              font-medium
              tracking-tighter
              transition
              duration-500
              ease-in-out
              transform
              cursor-pointer
              text-neutral-200
              hover:text-neutral-200
            "
                  >
                    <img
                      src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322885/Faculty%20Members/title_ab0jmz.png"
                      alt=""
                      srcset=""
                      className="college__sidenav"
                    />
                  </h2>
                  <button className="hidden rounded-lg focus:outline-none ">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </Link>

              <div className="flex flex-col flex-grow px-1 mt-3">
                <nav className="flex-1 space-y-1 bg-neutral-800">
                  <ul>
                    <li className="sidenav__li">
                      <a
                        className="
                  inline-flex
                  items-center
                  w-full
                  px-4
                  py-2
                  my-2
                  text-base
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border
                  rounded-lg
                  text-neutral-200
                  bg-neutral-900
                  border-neutral-900
                  
                "
                        style={{
                          textDecoration: "none",
                          color: "#2C499F",
                          fontWeight: "500",
                        }}
                        white
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <Link
                          className="ml-4"
                          to="/about-us"
                          style={{
                            textDecoration: "none",
                            color: "#2C499F",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          About
                        </Link>
                      </a>
                    </li>
                    <li className="sidenav__li">
                      <Link
                        to="contact-us"
                        style={{
                          textDecoration: "none",
                          color: "#2C499F",
                          fontWeight: "500",
                        }}
                        className="
                  inline-flex
                  items-center
                  w-full
                  px-4
                  py-2
                  my-2
                  text-base
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border
                  rounded-lg
                  text-neutral-200
                  border-neutral-800
                  hover:border-neutral-800
                  
                  hover:bg-neutral-900
                "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span
                          className="ml-4"
                          style={{
                            textDecoration: "none",
                            color: "#2C499F",
                            fontWeight: "500",
                          }}
                        >
                          Contact
                        </span>
                      </Link>
                    </li>
                    <li className="sidenav__li">
                      <Link
                        to="/dashboard-login"
                        style={{
                          textDecoration: "none",
                          color: "#2C499F",
                          fontWeight: "500",
                        }}
                        className="
                  inline-flex
                  items-center
                  w-full
                  px-4
                  py-2
                  my-2
                  text-base
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border
                  rounded-lg
                  text-neutral-200
                  border-neutral-800
                  hover:border-neutral-800
                  
                  hover:bg-neutral-900
                "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span
                          className="ml-4"
                          style={{
                            textDecoration: "none",
                            color: "#2C499F",
                            fontWeight: "500",
                          }}
                        >
                          Dashboard
                        </span>
                      </Link>
                    </li>

                    {!user ? null : (
                      <>
                        <li className="sidenav__li">
                          <a
                            href="/"
                            className="
              inline-flex
              items-center
              w-full
              px-4
              py-2
              my-2
              text-base
              transition
              duration-500
              ease-in-out
              transform
              border
              rounded-lg
              text-neutral-200
              bg-neutral-900
              border-neutral-900
              
            "
                            style={{
                              textDecoration: "none",
                              color: "#2C499F",
                              fontWeight: "500",
                              cursor: "pointer",
                            }}
                            onClick={handleClick}
                          >
                            <LogoutIcon
                              style={{ width: "18px", height: "18px" }}
                            />
                            <a
                              className="ml-4"
                              to="/about-us"
                              style={{
                                textDecoration: "none",
                                color: "#2C499F",
                                fontWeight: "500",
                              }}
                            >
                              {" "}
                              Logout
                            </a>
                          </a>
                        </li>
                      </>
                    )}

                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <h1 style={{ fontSize: "20px", marginTop: "10px" }}>
                        Our Links :{" "}
                      </h1>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.facebook.com/niharika.csit"
                        target={"_blank"}
                      >
                        <FacebookIcon className="facebook" />
                      </a>

                      <a
                        style={{ textDecoration: "none" }}
                        href="https://np.linkedin.com"
                        target={"_blank"}
                      >
                        <LinkedInIcon className="linkedin" />{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
