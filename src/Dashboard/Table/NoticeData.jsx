import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { ENDPOINT } from "../../GlobalVariables";

const NoticeData = ({ value, setRefresh, refresh }) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    const { data } = await axios.delete(
      `${ENDPOINT}/api/v1/notice/${value ? value._id : null}`
    );
    try {
      console.log(data);
      setRefresh(!refresh);
      toast.info("Event Deleted");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <tr key={value._id}>
        <td>{value.title}</td>
        <td>{value.startDate}</td>
        <td>{value.endDate}</td>

        <td>
          {" "}
          <button>
            {" "}
            <Tooltip title="Delete">
              <DeleteIcon
                fontSize="small"
                style={{ color: "#d11a2a", marginLeft: "15px" }}
                onClick={handleDelete}
              />
            </Tooltip>
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default NoticeData;
