import React from "react";
import Dashboard from "./Dashboard";

const Panel = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      {userInfo ? (
        <Dashboard />
      ) : (
        <h1 style={{ textAlign: "center", margin: "10px 0px", color: "red" }}>
          Not Authenticated
        </h1>
      )}
    </>
  );
};

export default Panel;
