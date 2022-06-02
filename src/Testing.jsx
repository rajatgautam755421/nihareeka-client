import React, { useEffect, useState } from "react";
import TestingData from "./TestingData";

const Testing = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const date = Date.now();
    setData([...data, { date, name, message }]);
  };

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <>
      <div className="container">
        Name : <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ border: "1px solid black" }}
        />
        <br />
        Message : <br />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ border: "1px solid black" }}
        />
        <br />
        <br />
        <button onClick={handleClick} style={{ backgroundColor: "red" }}>
          Post
        </button>
        <hr />
        {data
          ? data.map((value) => {
              return (
                <>
                  <TestingData value={value} data={data} setData={setData} />
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Testing;
