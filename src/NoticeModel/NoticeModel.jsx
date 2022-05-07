import React from "react";
import "./NoticeModel.css";

const NoticeModel = () => {
  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <div className="modal__main">
          <h1 style={{ color: "white" }}>Hello World</h1>
        </div>
      </div>
    </>
  );
};

export default NoticeModel;
