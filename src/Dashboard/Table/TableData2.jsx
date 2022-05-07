import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";

const TableData2 = ({ value, setClicked }) => {
  const handleClick = async () => {
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/newsletter/${value ? value._id : null}`
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

export default TableData2;