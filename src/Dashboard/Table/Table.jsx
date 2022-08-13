import React, { useEffect, useState } from "react";
import axios from "axios";
import TableData from "./TableData";
import "./Table.css";
import Loader from "../../Loader";
import { ENDPOINT } from "../../GlobalVariables";
const Table = () => {
  const [contacts, setContacts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/contact`);
      setContacts(data.getContact);
      console.log(contacts);
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
        <table className="table main__secction1">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Feedback</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody style={{ overflowX: "scroll" }}>
            {loading && <Loader />}
            {contacts
              ? contacts.length === 0 && (
                  <h6 style={{ marginTop: "10px" }}>No Feedbacks</h6>
                )
              : null}
            {contacts
              ? contacts.map((value) => {
                  return (
                    <>
                      <TableData
                        value={value}
                        setClicked={setClicked}
                        clicked={clicked}
                      />
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
