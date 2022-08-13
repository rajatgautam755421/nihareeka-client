import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeData from "./NoticeData";
import Loader from "../../Loader";
import { ENDPOINT } from "../../GlobalVariables";

const NoticeTable = ({ render }) => {
  const [notice, setNotice] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/notice`);
      console.log(data);
      setNotice(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [render, refresh]);
  return (
    <>
      <div style={{ overflowX: "auto" }}>
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
            {loading && <Loader />}
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
      </div>
    </>
  );
};

export default NoticeTable;
