import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ENDPOINT } from "../GlobalVariables";
import Loader from "../Loader";
import "./Notification.css";

const Notification = ({ clicked, setClicked, badge, setBadge }) => {
  console.log(clicked);
  const date = new Date();
  const getTime = date.getTime();
  console.log(getTime);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/contact`);
      console.log(data);
      setContacts(data.getContact);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    const { data } = await axios.put(`${ENDPOINT}/api/v1/notification/false`);
    try {
      setClicked(!clicked);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container-fluid noti__main__div">
        <div className="container-fluid mt-4">
          {loading ? (
            <>
              <Skeleton
                animation="wave"
                height={80}
                variant="h1"
                style={{ marginTop: "10px", borderRadius: "10px" }}
              />
              <Skeleton
                animation="wave"
                height={80}
                variant="h1"
                style={{ marginTop: "10px", borderRadius: "10px" }}
              />
              <Skeleton
                animation="wave"
                height={80}
                variant="h1"
                style={{ marginTop: "10px", borderRadius: "10px" }}
              />
              <Skeleton
                animation="wave"
                height={80}
                variant="h1"
                style={{ marginTop: "10px", borderRadius: "10px" }}
              />
              <Skeleton
                animation="wave"
                height={80}
                variant="h1"
                style={{ marginTop: "10px", borderRadius: "10px" }}
              />
            </>
          ) : (
            <>
              {contacts
                ? contacts.length === 0 && (
                    <h6
                      style={{
                        marginTop: "10px",
                        color: "black",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      No Feedbacks
                    </h6>
                  )
                : null}
              {contacts
                ? contacts.slice(0, 5).map((value, index) => {
                    return (
                      <>
                        {index === 0 && badge === true ? (
                          <Link
                            to="/admin-panel"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={handleClick}
                          >
                            <div
                              className="container-fluid"
                              style={{
                                backgroundColor: "rgb(231, 224, 224)",
                                borderRadius: "5px",
                              }}
                            >
                              <h6 style={{ padding: "2px" }}>
                                {value ? value.email.toUpperCase() : null} Just
                                Provided Feedback
                              </h6>
                              <h6
                                style={{
                                  textAlign: "center",
                                  fontWeight: "200",
                                }}
                              >
                                At{" "}
                                {value ? value.createdAt.slice(12, 19) : null} (
                                {value ? value.createdAt.slice(0, 10) : null})
                              </h6>
                              <hr />
                            </div>
                          </Link>
                        ) : (
                          <Link
                            to="/admin-panel"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={handleClick}
                          >
                            <div>
                              <h6>
                                {value ? value.email.toUpperCase() : null} Just
                                Provided Feedback
                              </h6>
                              <h6
                                style={{
                                  textAlign: "center",
                                  fontWeight: "200",
                                }}
                              >
                                At{" "}
                                {value ? value.createdAt.slice(12, 19) : null} (
                                {value ? value.createdAt.slice(0, 10) : null})
                              </h6>
                              <hr />
                            </div>
                          </Link>
                        )}
                      </>
                    );
                  })
                : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;
