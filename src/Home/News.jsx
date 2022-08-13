import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import "./News.css";
import { Tooltip } from "@mui/material";
import { ENDPOINT } from "../GlobalVariables";

const News = () => {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const fetchDaata = async () => {
    const { data } = await axios.get(`${ENDPOINT}/api/v1/events`);
    try {
      console.log(data);
      setEvents(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchDaata();
  }, []);

  const handleView = () => {
    setShow(true);
  };

  const handleView2 = () => {
    setShow1(true);
  };
  const handleView3 = () => {
    setShow2(true);
  };
  const handleView4 = () => {
    setShow3(true);
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto relative p-5 sm:p-0 ">
        <h1 style={{ textAlign: "center", color: "#D90081", padding: "20px" }}>
          <b>News & activities</b>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
          <div className="sm:col-span-12 lg:col-span-9">
            <div
              className=" bg-cover text-center overflow-hidden news__events__image__1"
              style={{
                height: 500,
                backgroundImage: `url(${events[0] ? events[0].pic : null})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
              title="Nihareeka News&Activities"
              onClick={handleView}
            ></div>

            <div className="mt-3 text-center bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              {show && (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={show}
                  // onClick={handleClose}
                >
                  <img
                    src={events[0] ? events[0].pic : null}
                    alt=""
                    srcset=""
                    style={{
                      objectFit: "contain",
                      width: "90%",
                      height: "90%",
                    }}
                  />{" "}
                  <Tooltip title="close">
                    <CloseIcon
                      style={{
                        position: "absolute",
                        top: "0",
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow(false)}
                    />
                  </Tooltip>
                </Backdrop>
              )}
              <div className>
                <a
                  href="#link"
                  className="block text-gray-900 font-bold text-2xl mb-2 hover:text-pink-600 transition duration-500 ease-in-out"
                  onClick={handleView}
                >
                  {events[0] ? events[0].title : null}
                </a>

                <p className="text-gray-700 text-base mt-2 mx-5 sm:mx-10">
                  {events[0] ? events[0].description : null}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {show1 && (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={show1}
                >
                  <img
                    src={events[1] ? events[1].pic : null}
                    alt=""
                    srcset=""
                    style={{
                      objectFit: "contain",
                      width: "90%",
                      height: "90%",
                    }}
                  />{" "}
                  <Tooltip title="close">
                    <CloseIcon
                      style={{
                        position: "absolute",
                        top: "0",
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow1(false)}
                    />
                  </Tooltip>
                </Backdrop>
              )}

              <div
                className="h-40 bg-cover text-center overflow-hidden  news__events__image__1"
                style={{
                  backgroundImage: `url(${events[1] ? events[1].pic : null})`,
                  cursor: "pointer",
                }}
                title="Nihareeka News&Activities"
                onClick={handleView2}
              ></div>

              <Link
                to="/"
                className="main__text__events text-gray-900 inline-block font-semibold text-md my-2 hover:text-pink-600 transition duration-500 ease-in-out"
                onClick={handleView2}
              >
                {events[1] ? events[1].title : null}
              </Link>
            </div>
            <div className="mb-2">
              {show2 && (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={show2}
                >
                  <img
                    src={events[2] ? events[2].pic : null}
                    alt=""
                    srcset=""
                    style={{
                      objectFit: "contain",
                      width: "90%",
                      height: "90%",
                    }}
                  />{" "}
                  <Tooltip title="close">
                    <CloseIcon
                      style={{
                        position: "absolute",
                        top: "0",
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow2(false)}
                    />
                  </Tooltip>
                </Backdrop>
              )}

              <div
                className="h-40 bg-cover text-center overflow-hidden  news__events__image__1"
                style={{
                  backgroundImage: `url(${events[2] ? events[2].pic : null})`,
                  cursor: "pointer",
                }}
                title="Nihareeka News&Activities"
                onClick={handleView3}
              ></div>

              <Link
                to="/"
                className="main__text__events text-gray-900 inline-block font-semibold text-md my-2 hover:text-pink-600 transition duration-500 ease-in-out"
                onClick={handleView3}
              >
                {events[2] ? events[2].title : null}
              </Link>
            </div>
            <div>
              {show3 && (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={show3}
                >
                  <img
                    src={events[3] ? events[3].pic : null}
                    alt=""
                    srcset=""
                    style={{
                      objectFit: "contain",
                      width: "90%",
                      height: "90%",
                    }}
                  />{" "}
                  <Tooltip title="close">
                    <CloseIcon
                      style={{
                        position: "absolute",
                        top: "0",
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow3(false)}
                    />
                  </Tooltip>
                </Backdrop>
              )}
              <div
                className="h-40 bg-cover text-center overflow-hidden news__events__image__1"
                style={{
                  backgroundImage: `url(${events[3] ? events[3].pic : null})`,
                  cursor: "pointer",
                }}
                title="Nihareeka News&Activities"
                onClick={handleView4}
              ></div>

              <Link
                to="/"
                className="main__text__events text-gray-900 inline-block font-semibold text-md my-2 hover:text-pink-600 transition duration-500 ease-in-out"
                onClick={handleView4}
              >
                {events[3] ? events[3].title : null}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
