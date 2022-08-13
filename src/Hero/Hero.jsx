import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "./Hero.css";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { ENDPOINT } from "../GlobalVariables";
const Hero = () => {
  const [notice, setNotice] = useState([]);
  const [newsDate, setNewsDate] = useState("");
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/api/v1/notice`);
      console.log(data);
      setNotice(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="Body">
        <div className="marqueee">
          <Marquee gradientWidth={0} speed={40}>
            <div class="marquee__inner" aria-hidden="true">
              {notice
                ? notice.slice(0, 6).map((value) => {
                    return (
                      <>
                        <span className="spann" style={{ color: "green" }}>
                          <span style={{ color: "brown" }}>*</span>
                          {value.title} ({value.startDate} to {value.endDate})
                          <span style={{ color: "brown" }}>*</span>
                        </span>
                      </>
                    );
                  })
                : null}
            </div>
          </Marquee>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Hero;
