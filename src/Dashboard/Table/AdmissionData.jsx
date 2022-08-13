import React from "react";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../../GlobalVariables";

const AdmissionData = ({ value, render, setRender }) => {
  console.log(value);

  const handleClick = async () => {
    const { data } = await axios.delete(
      `${ENDPOINT}/api/v1/form/delete/${value ? value._id : null}`
    );
    try {
      console.log(data);
      setRender(!render);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <tr>
        <td>
          {value.firstName} {value.lastname}
        </td>
        <td>{value.value === true ? "REGISTRATION" : "ADMISSION"}</td>
        <td>{value.email}</td>
        <td>{value.acceptence ? value.acceptence.toUpperCase() : null}</td>
        <td>
          <Link to={`/admission-detail/${value ? value._id : null}`}>
            <div
              className="container-fluid"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tooltip
                title={`View Details Of ${value ? value.firstName : null}`}
              >
                <CalendarViewDayIcon
                  style={{
                    cursor: "pointer",
                    color: "black",
                    textAlign: "center",
                    margin: "0px auto",
                  }}
                />
              </Tooltip>
            </div>
          </Link>
        </td>

        <td>
          {" "}
          <button>
            {" "}
            <Tooltip title="Delete">
              <DeleteIcon
                fontSize="small"
                style={{ color: "#d11a2a", marginLeft: "15px" }}
                onClick={handleClick}
              />
            </Tooltip>{" "}
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default AdmissionData;
