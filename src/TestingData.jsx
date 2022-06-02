import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const TestingData = ({ value, data, setData }) => {
  const [name, setName] = useState("");
  const handleDelete = () => {
    const filteredValue = data.filter((ele) => {
      return ele.date !== value.date;
    });
    setData(filteredValue);
    console.log(filteredValue);
  };

  const handleEdit = () => {
    const foundItem = data.find((ele) => {
      return ele.date === value.date;
    });
    foundItem.name = name;
    setData([...data]);
  };

  return (
    <>
      <h4>{value.name}</h4>
      <h5>{value.message}</h5>
      <h6>{value.date}</h6>
      <DeleteIcon style={{ cursor: "pointer" }} onClick={handleDelete} />
      <hr />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ border: "1px solid red" }}
      />
      <EditIcon style={{ cursor: "pointer" }} onClick={handleEdit} />
      <hr />
    </>
  );
};

export default TestingData;
