import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteResultData = ({ value, setRender, render }) => {
  console.log(value);

  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/result/${value ? value._id : null}`
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
        <td>{value.title}</td>

        <td>
          {" "}
          <button>
            {" "}
            <DeleteIcon
              fontSize="small"
              style={{ color: "#d11a2a", marginLeft: "15px" }}
              onClick={handleClick}
            />
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default DeleteResultData;
