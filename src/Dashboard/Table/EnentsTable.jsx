import axios from "axios";
import React, { useEffect, useState } from "react";

import EventsTableData from "./EventsTableData";
const EnentsTable = () => {
  const [events, setEvents] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/events");
      try {
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [render]);
  return (
    <>
      <table className="table main__secction1">
        <thead>
          <tr>
            <th>S.No</th>
            <th scope="col">Title</th>

            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {events
            ? events.length === 0 && (
                <h6 style={{ marginTop: "10px" }}>No Events</h6>
              )
            : null}
          {events.map((value, index) => {
            return (
              <>
                <EventsTableData
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
    </>
  );
};

export default EnentsTable;
