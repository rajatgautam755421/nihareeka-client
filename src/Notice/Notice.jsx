import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Notice.css";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/notice");
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
        <b>Notices</b>
      </h1>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {notices
              ? notices.map((value) => {
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
