import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./Requirement.css";

const Requirement = ({ courseName }) => {
  console.log(courseName);
  return (
    <>
      {courseName === "MBS" ? (
        <>
          <h1
            style={{ marginTop: "50px", textAlign: "center", color: "#ec008d" }}
          >
            Entry Requirement
          </h1>

          <div className="container requirements__main__col">
            <CheckCircleOutlinedIcon className="requirements__main__icon" />
            <h5>
              BBS/BBA from T.U or any university recognized By T.U or from any
              stream that have passed Bachelor degree from T.U or university
              recognized by T.U and should appear CMAT test taken by T.U.
            </h5>
          </div>
        </>
      ) : (
        <>
          <h1
            style={{ marginTop: "50px", textAlign: "center", color: "#ec008d" }}
          >
            Entry Requirement
          </h1>
          <div className="container requirements__main__col">
            <CheckCircleOutlinedIcon className="requirements__main__icon" />
            <h5>
              Secured a minimum of second division(45%) or minimum C grade in
              all subjects in the twelve-year schooling or equivalent.
            </h5>
          </div>
          <div className="container requirements__main__col">
            <CheckCircleOutlinedIcon className="requirements__main__icon" />
            <h5>
              10+2 or equivalent in any discipline with minimum of 50% marks in
              aggregate from a recognized board.
            </h5>
          </div>
          {courseName !== "BIM" ||
            (courseName !== "BCA" && (
              <>
                <div className="container requirements__main__col">
                  <CheckCircleOutlinedIcon className="requirements__main__icon" />
                  <h5>
                    In order to get admission in the {courseName} program, a
                    student should fill up the Entrance Application Form from
                    any of the Affiliated or Constituent Colleges offering{" "}
                    {courseName} course and should pass the Entrance Examination
                    conducted by Institute of Science and Technology (IOST), TU.
                    A second internal entrance exam will be held on campus for
                    shortlisting the eligible candidates. Pre-booking to secure
                    a place for the interview is possible.
                  </h5>
                </div>
              </>
            ))}
          {courseName === "Bsc.CSIT" && (
            <>
              <div className="container requirements__main__col">
                <CheckCircleOutlinedIcon className="requirements__main__icon" />
                <h5>
                  Passed 3 years Diploma in Engineering program from CTEVT
                  taking both physics and mathematics.
                </h5>
              </div>
              <div className="container requirements__main__col">
                <CheckCircleOutlinedIcon className="requirements__main__icon" />
                <h5>
                  Should have successfully passed the entrance exams conducted
                  by T.U securing atleast 35% marks.
                </h5>
              </div>
            </>
          )}
          {courseName === "BIM" ||
            (courseName === "BHM" && (
              <>
                <div className="container requirements__main__col">
                  <CheckCircleOutlinedIcon className="requirements__main__icon" />
                  <h5>
                    In order to get admission in the {courseName} program, a
                    student should fill up the CMAT Application Form from any of
                    the Affiliated or Constituent Colleges offering {courseName}{" "}
                    course and should pass the Entrance Examination conducted by
                    Faculty Of Management, TU. Pre-booking to secure a place for
                    the interview is possible.
                  </h5>
                </div>
              </>
            ))}
          {courseName === "BCA" && (
            <>
              <div className="container requirements__main__col">
                <CheckCircleOutlinedIcon className="requirements__main__icon" />
                <h5>
                  In order to get admission in the {courseName} program, a
                  student should fill up the Entrance Application Form from any
                  of the Affiliated or Constituent Colleges offering{" "}
                  {courseName} course and should pass the Entrance Examination
                  conducted by Faculty Of Humanities and Social Sciences, TU.
                  Pre-booking to secure a place for the interview is possible.
                </h5>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Requirement;
