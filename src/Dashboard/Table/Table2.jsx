import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import TableData2 from "./TableData2";

const Table = () => {
  const [Newsletters, setNewsletters] = useState([]);

  const [clicked, setClicked] = useState(false);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/newsletter"
      );
      console.log(data);
      setNewsletters(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [clicked]);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Newsletters
            ? Newsletters.length === 0 && (
                <h6 style={{ marginTop: "10px" }}>No SignUps</h6>
              )
            : null}
          {Newsletters
            ? Newsletters.map((value) => {
                return (
                  <>
                    <TableData2 value={value} setClicked={setClicked} />
                  </>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default Table;
