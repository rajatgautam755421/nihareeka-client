import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { ENDPOINT } from "../../GlobalVariables";

const TableData2 = ({ value, setClicked }) => {
  const handleClick = async () => {
    const { data } = await axios.delete(
      `${ENDPOINT}/api/v1/newsletter/${value ? value._id : null}`
    );
    try {
      setClicked(true);
      console.log(data);
      toast.info(
        `${value ? value.email : null}'s Subscription Has Been Deleted `
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr key={value._id}>
        <td>{value.email}</td>
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

export default TableData2;
