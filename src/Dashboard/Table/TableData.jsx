import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { ENDPOINT } from "../../GlobalVariables";

const TableData = ({ value, setClicked, clicked }) => {
  const handleClick = async () => {
    const { data } = await axios.delete(
      `${ENDPOINT}/api/v1/contact/${value ? value._id : null}`
    );
    try {
      setClicked(!clicked);
      console.log(data);
      toast.info(`${value ? value.email : null}'s Feedback Has Been Deleted `);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr key={value._id}>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>{value.message}</td>
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

export default TableData;
