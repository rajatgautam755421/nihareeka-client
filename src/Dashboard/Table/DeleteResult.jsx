import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../Loader";
import axios from "axios";
import DeleteResultData from "./DeleteResultData";
import { ENDPOINT } from "../../GlobalVariables";

const DeleteResult = ({ fetch2, fetch3, setFetch3 }) => {
  const [result, setResults] = useState([]);
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/result`);
      try {
        setLoading(true);
        console.log(data);
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, [render, fetch2, fetch3]);

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table className="table main__secction1" style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th scope="col">Title</th>
              <th scope="col">Faculty</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && <Loader />}
            {result
              ? result.length === 0 && (
                  <h6 style={{ marginTop: "10px" }}>No Results</h6>
                )
              : null}
            {result.map((value, index) => {
              return (
                <>
                  <DeleteResultData
                    value={value}
                    render={render}
                    setRender={setRender}
                    index={index + 1}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeleteResult;
