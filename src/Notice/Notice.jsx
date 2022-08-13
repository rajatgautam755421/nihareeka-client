import axios from "axios";
import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../GlobalVariables";
import "./Notice.css";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${ENDPOINT}/api/v1/notice`);
      try {
        console.log(data);
        setNotices(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const filteredValues = notices.filter((Events) => {
    return Events.title.toLowerCase().includes(search.toLowerCase());
  });
  const keyPress = () => {
    if (filteredValues.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <h1
        style={{ textAlign: "center", color: "#D90081", padding: "20px" }}
        id="search__main__id"
      >
        <b>Notices</b>
      </h1>
      <form className="d-flex container">
        <input
          className="form-control me-2 searchbar__main"
          type="search"
          placeholder="Search For Events"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={keyPress}
          id="search__main__id"
        />
      </form>

      {error ? (
        <h4 style={{ margin: "10px 0px", textAlign: "center" }}>
          No Such Notices
        </h4>
      ) : null}
      {notices
        ? notices.length === 0 && (
            <h6 style={{ marginTop: "10px", textAlign: "center" }}>
              No Notices Published
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
                            {value.startDate} --- {value.endDate}
                          </span>
                        </div>
                        <div className="md:flex-grow mt-4">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            {value.title}
                          </h2>
                        </div>
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

export default Notice;
