import React, { useEffect, useState } from "react";
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
import EnentsTable from "./Table/EnentsTable.jsx";
import EventIcon from "@mui/icons-material/Event";
import axios from "axios";
import Admission from "./Table/Admission";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { ENDPOINT } from "../GlobalVariables";
const Dashboard = () => {
  const [render, setRender] = useState(false);
  const [fetch1, setFetch] = useState(false);
  const [fetch3, setFetch3] = useState(false);
  const [fetch4, setFetch4] = useState(false);

  useEffect(() => {
    const handleClick = async () => {
      const { data } = await axios.put(`${ENDPOINT}/api/v1/notification/false`);
      try {
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleClick();
  }, []);
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
            <UpdateEvent fetch4={fetch4} setFetch4={setFetch4} />
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
            <PostResult fetch3={fetch3} setFetch3={setFetch3} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <DeleteIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>Delete Result</b>
            </h4>
            <DeleteResult fetch3={fetch3} setFetch2={setFetch3} />
          </div>
          <div className="col-md-7">
            <h4
              style={{ textAlign: "center", color: "#D90081", padding: "40px" }}
            >
              <EventIcon fontSize="large" style={{ color: "#390081" }} />{" "}
              <b>All Events</b>
            </h4>
            <EnentsTable fetch4={fetch4} setFetch4={setFetch4} />
          </div>
        </div>
      </div>
      <div className="container">
        <h4 style={{ textAlign: "center", color: "#D90081", padding: "40px" }}>
          <FormatListNumberedIcon
            fontSize="large"
            style={{ color: "#390081" }}
          />{" "}
          <b>All Online Admission Requests</b>
        </h4>
        <Admission />
      </div>
    </>
  );
};

export default Dashboard;
