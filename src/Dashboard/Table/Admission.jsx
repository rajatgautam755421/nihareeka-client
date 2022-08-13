import axios from "axios";
import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../../GlobalVariables";
import Loader from "../../Loader";
import AdmissionData from "./AdmissionData";

const Admission = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/form`);

      try {
        setLoading(true);
        console.log(data);
        setInfo(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [render]);
  return (
    <>
      <div style={{ overflowX: "auto" }} className="container-fluid">
        <table class="table container-fluid">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Form Type</th>
              <th scope="col">Email</th>
              <th scope="col">Current State</th>
              <th scope="col">View Details</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading && <Loader />}
            {info
              ? info.length === 0 && (
                  <h6 style={{ marginTop: "10px" }}>No Admission Requests</h6>
                )
              : null}
            {info
              ? info.map((value) => {
                  return (
                    <>
                      <AdmissionData
                        value={value}
                        render={render}
                        setRender={setRender}
                      />
                      {/* <NoticeData
                        
                        setRefresh={setRefresh}
                        refresh={refresh}
                      /> */}
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

export default Admission;
