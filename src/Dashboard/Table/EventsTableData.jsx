import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { ENDPOINT } from "../../GlobalVariables";

const EventsTableData = ({ value, index, render, setRender }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.delete(
      `${ENDPOINT}/api/v1/events/${value ? value._id : null}`
    );
    try {
      setRender(!render);
      console.log(data);
      toast.success("Event Deleted Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr key={value._id}>
        <th scope="row">{index}</th>
        <td>{value ? value.title : null}</td>
        <td>{value ? value.category : null}</td>
        <td>
          <div className="bg-cyan-300">
            <img src={value.pic} className="object-scale-down h-10 w-auto" />
          </div>
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
            </Tooltip>
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default EventsTableData;
