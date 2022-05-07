import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";

const TableData = ({ value, setClicked }) => {
  const handleClick = async () => {
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/contact/${value ? value._id : null}`
    );
    try {
      setClicked(true);
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

export default TableData;
