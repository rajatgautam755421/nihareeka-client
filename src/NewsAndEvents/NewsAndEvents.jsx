import React, { useEffect, useState } from "react";
import PageInfo from "../PageInfo/PageInfo";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import NewsCard from "./NewsCard";
import "./NewsAndEvents.css";
import Notice from "../Notice/Notice";
import Result from "../Result/Result";
import axios from "axios";
import { Backdrop, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CollectionsIcon from "@mui/icons-material/Collections";

const NewsAndEvents = () => {
  const [notices, setNotices] = useState([]);
  const [show, setShow] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://128.199.18.46:4003/api/v1/events"
      );
      try {
        console.log(data);
        setNotices(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleDecr = () => {
    if (notices) {
      if (i === 0) {
        setI(0);
      } else {
        setI(i - 1);
      }
    }
  };
  const handleIncr = () => {
    if (notices) {
      if (i === notices.length - 1) {
        setI(0);
      } else {
        setI(i + 1);
      }
    }
  };
  return (
    <>
      <PageInfo title={"News And Events"} Icon={NewspaperOutlinedIcon} />
      <h1
        style={{
          textAlign: "center",
          color: "#D90081",
          marginTop: "30px",
        }}
      >
        <b>Events</b>
      </h1>
      {show && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={show}
        >
          <ArrowBackIosNewIcon
            onClick={handleDecr}
            style={{ cursor: "pointer" }}
          />
          <div style={{ overflowX: "auto" }}>
            <img
              src={notices[i] ? notices[i].pic : null}
              alt=""
              srcset=""
              style={{
                width: "70%",
                height: "70%",
                objectFit: "contain",
                margin: "0px auto",
              }}
            />{" "}
          </div>
          <ArrowForwardIosIcon
            onClick={handleIncr}
            style={{ cursor: "pointer" }}
          />
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
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <h6 onClick={() => setShow(true)}>Gallery View</h6>
        <CollectionsIcon />
      </div>
      {notices
        ? notices.length === 0 && (
            <h6 style={{ marginTop: "10px", textAlign: "center" }}>
              No Events
            </h6>
          )
        : null}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {notices.slice(0, 7).map((value) => {
              return (
                <>
                  <NewsCard
                    title={value.title}
                    description={value.description}
                    date={value.createdAt}
                    image={value.pic}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Notice />
      <Result />
    </>
  );
};

export default NewsAndEvents;
