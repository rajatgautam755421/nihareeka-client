import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteImageData = ({ value, setRender, render, index }) => {
  console.log(value);

  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/gallery/${value ? value._id : null}`
    );
    try {
      setRender(!render);
      console.log(data);
      toast.success("Image Deleted Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr key={value._id}>
        <th scope="row">{index}</th>
        <td>{value ? value.faculty.toUpperCase() : null}</td>
        <td>
          <div className="bg-cyan-300">
            <img src={value.pic} className="object-scale-down h-10 w-auto" />
          </div>
        </td>
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

export default DeleteImageData;
