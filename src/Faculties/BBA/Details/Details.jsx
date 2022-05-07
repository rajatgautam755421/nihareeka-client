import React from "react";
import CareerDetails from "./CareerDetails";
import CourseDetails from "./CourseDetails";

const Details = ({ courseName }) => {
  return (
    <>
      <CareerDetails courseName={courseName} />
      <h1 style={{ marginTop: "50px", textAlign: "center", color: "#ec008d" }}>
        Course Details
      </h1>
      <CourseDetails courseName={courseName} />
    </>
  );
};

export default Details;
