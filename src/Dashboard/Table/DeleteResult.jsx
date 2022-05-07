import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";
import DeleteResultData from "./DeleteResultData";

const DeleteResult = ({ fetch2 }) => {
  const [result, setResults] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/result");
      try {
        console.log(data);
        setResults(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItems();
  }, [render, fetch2]);

  return (
    <>
      <table className="table main__secction1">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {result
            ? result.length === 0 && (
                <h6 style={{ marginTop: "10px" }}>No Results</h6>
              )
            : null}
          {result.map((value) => {
            return (
              <>
                <DeleteResultData
                  value={value}
                  render={render}
                  setRender={setRender}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DeleteResult;
