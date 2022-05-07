import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Notice.css";

const Result = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/result");
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
      <h1 style={{ textAlign: "center", color: "#D90081", padding: "20px" }}>
        <b>Results</b>
      </h1>
      {notices
        ? notices.length === 0 && (
            <h6 style={{ marginTop: "10px", textAlign: "center" }}>
              No Results Published
            </h6>
          )
        : null}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {notices
              ? notices.slice(0, 6).map((value) => {
                  return (
                    <>
                      <div className="py-8 md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="mt-1 text-gray-600 text-sm">
                            {value ? value.createdAt.slice(0, 10) : null}
                          </span>
                        </div>
                        <div className="md:flex-grow mt-4">
                          <h2
                            className="text-2xl font-medium text-gray-900 title-font mb-2"
                            target="_blank"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {value.title}
                          </h2>
                        </div>
                        <a
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          href={value ? value.link : null}
                          style={{ textDecoration: "none", color: "#D90081" }}
                          target="_blank"
                        >
                          View Result
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;
