import React, { useEffect, useState } from "react";
import PageInfo from "../PageInfo/PageInfo";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import NewsCard from "./NewsCard";
import "./NewsAndEvents.css";
import Notice from "../Notice/Notice";
import Result from "../Result/Result";
import axios from "axios";

const NewsAndEvents = () => {
  const [notices, setNotices] = useState([]);
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
