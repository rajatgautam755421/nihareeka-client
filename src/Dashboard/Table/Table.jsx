import React, { useEffect, useState } from "react";
import axios from "axios";
import TableData from "./TableData";
const Table = () => {
  const [contacts, setContacts] = useState([]);

  const [clicked, setClicked] = useState(false);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/contact");
      setContacts(data.getContact);
      console.log(contacts);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [clicked]);

  return (
    <>
      <table className="table main__secction1">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Feedback</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            ? contacts.length === 0 && (
                <h6 style={{ marginTop: "10px" }}>No Feedbacks</h6>
              )
            : null}
          {contacts
            ? contacts.map((value) => {
                return (
                  <>
                    <TableData value={value} setClicked={setClicked} />
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
