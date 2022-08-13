import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { ENDPOINT } from "../../GlobalVariables";

const DeleteResultData = ({ value, setRender, render, index }) => {
  console.log(value);

  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.delete(
      `${ENDPOINT}/api/v1/result/${value ? value._id : null}`
    );
    try {
      console.log(data);
      setRender(!render);

      toast.success("Result Deleted Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr key={value._id}>
        <td>{index}</td>
        <td>{value.title}</td>
        <td>{value.faculty}</td>

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

export default DeleteResultData;
