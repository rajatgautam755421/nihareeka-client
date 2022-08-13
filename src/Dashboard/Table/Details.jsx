import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { toast } from "react-toastify";
import { ENDPOINT } from "../../GlobalVariables";

const Details = () => {
  const { id } = useParams();
  const [render, setRender] = useState(false);

  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/form/${id}`);

      try {
        setLoading(true);
        console.log(data);
        setInfo(data);

        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [render]);

  const handleAccept = async () => {
    const { data } = await axios.put(
      `${ENDPOINT}/api/v1/form/update/${id}/accepted`
    );
    setRender(!render);
    if (data) {
      const response = await axios.get(
        `${ENDPOINT}/api/v1/mail/accept/${
          info ? info.email : null
        }/Your Admission Request Has Been Accepted.Please Contact Nihareeka College For More Information.`
      );
      try {
        toast.success(
          "Application Is Accepted and email Has Been Sent Successfully"
        );
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("State Not Updated");
    }
  };

  const handleReject = async () => {
    const { data } = await axios.put(
      `${ENDPOINT}/api/v1/form/update/${id}/rejected`
    );
    setRender(!render);
    if (data) {
      const response = await axios.get(
        `${ENDPOINT}/api/v1/mail/reject/${
          info ? info.email : null
        }/Your Admission Request Has Been Rejected.Please Contact Nihareeka College For More Information.`
      );
      try {
        toast.success(
          "Application Is Rejected and email Has Been Sent Successfully"
        );
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("State Not Updated");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          style={{ border: "1px solid black", borderRadius: "5px" }}
          className="col-md-8 mt-3"
        >
          <img
            style={{
              margin: "10px auto",
            }}
            // src={Image}
            alt=""
          />
          <h1
            style={{ textAlign: "center", color: "#0C4282", padding: "10px" }}
          >
            <b>NIHAREEKA COLLEGE</b>
            <br />
            <p style={{ color: "#074791", fontSize: "28px" }}>
              {" "}
              College of Management and Information Technology
            </p>
            <p style={{ color: "#000000", fontSize: "20px" }}> ACADEMIC YEAR</p>
            <p style={{ color: "#000000", fontSize: "26px" }}>
              {" "}
              ADMISSION FORM
            </p>
          </h1>
          <b>
            PROGRAMMED OFFERED:
            {loading ? (
              "Faculty"
            ) : (
              <>{info.faculty ? info.faculty.toUpperCase() : null}</>
            )}
          </b>
          {loading ? (
            <Skeleton animation="wave" variant="h1" height={400} />
          ) : (
            <table
              style={{ border: "2px solid black" }}
              className="table table-bordered table-sm"
            >
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Particulars</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Name of student</td>
                  <td>
                    {info ? info.firstName : <Skeleton animation="wave" />}{" "}
                    {info ? info.middleName : <Skeleton animation="wave" />}{" "}
                    {info ? info.lastname : <Skeleton animation="wave" />}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Father's name</td>
                  <td>
                    {info ? info.fatherName : <Skeleton animation="wave" />}
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mother's name</td>
                  <td>
                    {info ? info.motherName : <Skeleton animation="wave" />}
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Nationality</td>
                  <td>
                    {info.nationality ? (
                      info.nationality.toUpperCase()
                    ) : (
                      <Skeleton animation="wave" />
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Permanent Address</td>
                  <td>
                    {info ? (
                      info.permanentAddress
                    ) : (
                      <Skeleton animation="wave" />
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Temporary Address</td>
                  <td>
                    {info ? (
                      info.temporaryAddress
                    ) : (
                      <Skeleton animation="wave" />
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>School/College</td>
                  <td>{info ? info.sc : <Skeleton animation="wave" />}</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Contact Number</td>
                  <td>
                    {info ? info.contactNumber : <Skeleton animation="wave" />}
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Email ID</td>
                  <td>{info ? info.email : <Skeleton animation="wave" />}</td>
                </tr>
                {info
                  ? info.marksObtained !== "0" && (
                      <tr>
                        <th scope="row">10</th>
                        <td>Marks Obtained +2 or Equivalent(In Grade/GPA/%)</td>
                        <td>
                          {info ? (
                            info.marksObtained
                          ) : (
                            <Skeleton animation="wave" />
                          )}
                        </td>
                      </tr>
                    )
                  : null}

                {info.tuRoll && (
                  <tr>
                    <th scope="row">11</th>
                    <td>TU Entrance Roll No</td>
                    <td>{info ? info.tuRoll : null}</td>
                  </tr>
                )}
                {info.tuMarks && (
                  <tr>
                    <th scope="row">12</th>
                    <td>TU Entrance Marks</td>
                    <td>
                      {info ? info.tuMarks : <Skeleton animation="wave" />}
                    </td>
                  </tr>
                )}

                <tr>
                  <th scope="row">5</th>
                  <td>Current State</td>
                  <td>
                    <b>
                      {info.acceptence ? (
                        info.acceptence.toUpperCase()
                      ) : (
                        <Skeleton animation="wave" />
                      )}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          <div>
            <button
              className=" bg-indigo-500 mt-2 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg add__us__main__button__accept"
              onClick={handleAccept}
              style={{ width: "100px", height: "45px" }}
            >
              Accept
            </button>
            <button
              className=" bg-indigo-500 mt-2 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg add__us__main__button__reject"
              onClick={handleReject}
              style={{ width: "100px", height: "45px" }}
            >
              Reject
            </button>

            <Link
              to={`/print/${info ? info._id : null}`}
              className="px-2 text-left focus:outline-none"
              style={{ textDecoration: "none", color: "black" }}
            >
              PRINT
            </Link>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Details;
