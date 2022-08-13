import axios from "axios";
import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../GlobalVariables";
import "./Result.css";

const Result = () => {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [faculty, setFaculty] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${ENDPOINT}/api/v1/result`);
      try {
        console.log(data);
        setNotices(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const filteredValues = notices
    ? notices.filter((Events) => {
        return Events.faculty
          ? Events.faculty.toLowerCase().includes(search.toLowerCase())
          : null;
      })
    : null;
  const keyPress = () => {
    if (filteredValues.length === 0) {
      setError(true);
      console.log("No Result");
    } else {
      setError(false);
      console.log("Yes Events");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#D90081", padding: "20px" }}>
        <b>Results</b>
      </h1>
      <form className="d-flex container">
        <input
          className="form-control me-2 searchbar__main"
          type="search"
          placeholder="Search By Faculty Name (csit,bca,bbs,bhm,bim)"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={keyPress}
          id="search__main__id"
        />
      </form>
      {notices.length !== 0 ? (
        error ? (
          <h4 style={{ margin: "10px 0px", textAlign: "center" }}>
            No Result Found For {search ? search.toUpperCase() : null} Faculty
          </h4>
        ) : null
      ) : null}
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
            {filteredValues
              ? filteredValues.map((value) => {
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
                            {value.title} ---{" "}
                            {value ? value.faculty.toUpperCase() : null}
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
                      <hr />
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
