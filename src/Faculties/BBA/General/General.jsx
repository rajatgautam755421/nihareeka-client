import React, { useEffect, useState } from "react";
import "./General.css";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CareerDetails from "../Details/CareerDetails";

const Info = ({ courseName }) => {
  const [course, setCousre] = useState("");
  const [credit, setCredit] = useState("");
  console.log(courseName);

  useEffect(() => {
    if (courseName === "MBS") {
      setCousre("2 Years");
      setCredit("60");
    } else {
      setCousre("4 Years");
      setCredit("122");
    }
  }, []);
  console.log(course);
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-md-3 col-sm-6 general__col__main mt-4">
            <BookOutlinedIcon className="general__icon__main" />
            <div className="container">
              <h5>Course Name</h5>
              <h4>{courseName ? courseName : null}</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 general__col__main mt-4">
            <CalendarMonthOutlinedIcon className="general__icon__main" />
            <div className="container">
              <h5>Course Duration</h5>
              <h4>{course}</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 general__col__main mt-4">
            <AccessTimeOutlinedIcon className="general__icon__main" />
            <div className="container">
              <h5>Credit Hour</h5>
              <h4>{credit}</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 general__col__main mt-4">
            <SchoolOutlinedIcon className="general__icon__main" />
            <div className="container">
              <h5>Affiliation</h5>
              <h4>T.U</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container course__description">
        <h5>
          <span className="course__full__name">
            {courseName
              ? courseName === "Bsc.CSIT" && (
                  <>
                    {" "}
                    Bachelors of Science in Computer Science and Information
                    Technology (BSc. CSIT)
                  </>
                )
              : null}
            {courseName
              ? courseName === "BCA" && (
                  <> Bachelors of Computer Application (BCA) </>
                )
              : null}
            {courseName
              ? courseName === "BBS" && <>Bachelor of Business Studies (BBS)</>
              : null}
            {courseName
              ? courseName === "BHM" && <> Bachelor of Hotel Management (BHM)</>
              : null}
          </span>

          {courseName
            ? courseName === "Bsc.CSIT" && (
                <>
                  {" "}
                  &nbsp; is a four year course affiliated to Tribhuvan
                  University designed to provide the student with all sorts of
                  knowledge in the field of Information Technology and
                  Computing. The program develops the underlying principles of
                  both Computer Science and Information Technology and shows how
                  these principles can be applied to real world problems.
                </>
              )
            : null}
          {courseName
            ? courseName === "BHM" && (
                <>
                  {" "}
                  &nbsp; programme of Tribhuvan University has been designed to
                  prepare the students to enter the hospitality industry at the
                  supervisory level in area of hotel and catering operations.BHM
                  program of Tribhuvan University is a four year, 8 semester
                  program which is offered in more than 10 Hotel Management
                  colleges of Nepal . Every year the total capacity of
                  enrollment for BHM program of Tribhuvan University is more
                  than 600.
                </>
              )
            : null}
          {courseName
            ? courseName === "BBS" && (
                <>
                  {" "}
                  &nbsp; is a four year course affiliated to Tribhuvan
                  University is to develop students into competent managers for
                  any sector of organized activity. The programme is based on
                  the principle that graduates will spend a major portion of
                  their life in a constantly changing environment. Therefore,
                  the student should have an opportunity to obtain a broad
                  knowledge of the concepts and reality- based skills underlying
                  the operation and management of organizations.
                </>
              )
            : null}
          {courseName
            ? courseName === "BCA" && (
                <>
                  {" "}
                  &nbsp;is to produce high quality computer application users
                  and developers. The program of study for Bachelor of Arts in
                  Computer Application (BCA) is over a period of eight semesters
                  (four academic years). The academic year begins in the
                  September and February of each year. The medium of instruction
                  and examination in the Bachelor of Arts in Computer
                  Application (BCA) program is English..
                </>
              )
            : null}
        </h5>
      </div>
    </>
  );
};

export default Info;
