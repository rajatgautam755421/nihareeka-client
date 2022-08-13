import axios from "axios";
import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../../GlobalVariables";
import Loader from "../../Loader";

import EventsTableData from "./EventsTableData";
const EnentsTable = ({ fetch4 }) => {
  const [events, setEvents] = useState([]);
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/events`);
      try {
        setLoading(true);

        console.log(data);
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [render, fetch4]);
  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table className="table main__secction1" style={{ overflowX: "auto" }}>
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
            {loading && <Loader />}
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
      </div>
    </>
  );
};

export default EnentsTable;
