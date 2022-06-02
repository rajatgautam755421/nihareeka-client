import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  const [events, setEvents] = useState([]);
  const fetchDaata = async () => {
    const { data } = await axios.get("http://128.199.18.46:4003/api/v1/events");
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

  return (
    <>
      <div className="max-w-screen-xl mx-auto relative p-5 sm:p-0 ">
        <h1 style={{ textAlign: "center", color: "#D90081", padding: "20px" }}>
          <b>News & activities</b>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
          <div className="sm:col-span-12 lg:col-span-9">
            <a href="#link">
              <div
                className=" bg-cover text-center overflow-hidden news__events__image__1"
                style={{
                  height: 500,
                  backgroundImage: `url(${events[0] ? events[0].pic : null})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                title="Nihareeka News&Activities"
              ></div>
            </a>
            <div className="mt-3 text-center bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className>
                <a
                  href="#link"
                  className="block text-gray-900 font-bold text-2xl mb-2 hover:text-pink-600 transition duration-500 ease-in-out"
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
              <a href="#link">
                <div
                  className="h-40 bg-cover text-center overflow-hidden  news__events__image__1"
                  style={{
                    backgroundImage: `url(${events[1] ? events[1].pic : null})`,
                  }}
                  title="Nihareeka News&Activities"
                ></div>
              </a>
              <a
                href="#link"
                className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-pink-600 transition duration-500 ease-in-out"
              >
                {events[1] ? events[1].title : null}
              </a>
            </div>
            <div className="mb-2">
              <a href="#link">
                <div
                  className="h-40 bg-cover text-center overflow-hidden  news__events__image__1"
                  style={{
                    backgroundImage: `url(${events[2] ? events[2].pic : null})`,
                  }}
                  title="Nihareeka News&Activities"
                ></div>
              </a>
              <a
                href="#link"
                className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-pink-600 transition duration-500 ease-in-out"
              >
                {events[2] ? events[2].title : null}
              </a>
            </div>
            <div>
              <a href="#link">
                <div
                  className="h-40 bg-cover text-center overflow-hidden news__events__image__1"
                  style={{
                    backgroundImage: `url(${events[3] ? events[3].pic : null})`,
                  }}
                  title="Nihareeka News&Activities"
                ></div>
              </a>
              <a
                href="#link"
                className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-pink-600 transition duration-500 ease-in-out"
              >
                {events[3] ? events[3].title : null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
