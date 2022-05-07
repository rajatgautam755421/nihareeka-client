import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeData from "./NoticeData";

const NoticeTable = ({ render }) => {
  const [notice, setNotice] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/notice");
      console.log(data);
      setNotice(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [render, refresh]);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Notice</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {notice
            ? notice.length === 0 && (
                <h6 style={{ marginTop: "10px" }}>No Notices</h6>
              )
            : null}
          {notice
            ? notice.map((value) => {
                return (
                  <>
                    <NoticeData
                      value={value}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  </>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default NoticeTable;
