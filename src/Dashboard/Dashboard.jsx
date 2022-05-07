import React, { useState } from "react";
import "./Dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Table from "./Table/Table";
import Table2 from "./Table/Table2";
import UpdateGallery from "./UpdateGallery";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import UpdateEvent from "./UpdateEvent";
import CollectionsIcon from "@mui/icons-material/Collections";
import DeleteImage from "./Table/DeleteImage";
import Notice from "./Notice";
import NoticeTable from "./Table/NoticeTable";
import DeleteIcon from "@mui/icons-material/Delete";
import PostResult from "./PostResult";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteResult from "./Table/DeleteResult";

const Dashboard = () => {
  const [render, setRender] = useState(false);
  const [fetch1, setFetch] = useState(false);
  console.log(render);
  return (
    <>
      <div className="container-fluid">
        <h1 style={{ textAlign: "center", color: "#D90081", padding: "40px" }}>
          <DashboardIcon fontSize="large" style={{ color: "#390081" }} />{" "}
          <b>Dashboard</b>
        </h1>
        <div className="row">
          <div className="col-md-6 col-12 ">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <ChatBubbleIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Feedbacks</b>
            </h4>
            <Table />
          </div>
          <div className="col-md-6 col-12 ">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <UnsubscribeIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>NewsLetter</b>
            </h4>
            <Table2 />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-5 col-12">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <CollectionsIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Delete Image</b>
            </h4>
            <DeleteImage setFetch={setFetch} fetch1={fetch1} />
          </div>
          <div className="col-md-3 col-12">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <CollectionsIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Upload Image</b>
            </h4>
            <UpdateGallery setFetch={setFetch} fetch1={fetch1} />
          </div>
          <div className="col-md-4 col-12">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <CollectionsIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Event Updates</b>
            </h4>
            <UpdateEvent />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <NotificationsActiveIcon
                fontSize="large"
                style={{ color: "#390081" }}
              />{" "}
              <b>Notice Update</b>
            </h4>
            <Notice setRender={setRender} render={render} />
          </div>
          <div className="col-md-4">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <DeleteIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Delete Notice</b>
            </h4>
            <NoticeTable setRender={setRender} render={render} />
          </div>
          <div className="col-md-4">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <PostAddIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Post Result</b>
            </h4>
            <PostResult />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <DeleteResult />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
