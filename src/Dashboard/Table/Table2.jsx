import React, { useEffect, useState } from "react";
import axios from "axios";
import TableData2 from "./TableData2";
import Loader from "../../Loader";
import { ENDPOINT } from "../../GlobalVariables";

const Table = () => {
  const [Newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);

  const [clicked, setClicked] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/newsletter`);
      console.log(data);
      setNewsletters(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [clicked]);
  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && <Loader />}
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
      </div>
    </>
  );
};

export default Table;
