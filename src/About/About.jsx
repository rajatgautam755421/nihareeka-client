import React from "react";
import PageInfo from "../PageInfo/PageInfo";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import "./About.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const About = () => {
  return (
    <>
      <PageInfo title={"About Us"} Icon={HelpCenterOutlinedIcon} />
      <div className="container about__main__col mt-4">
        <h5 className="about__heading__main">
          What is it like to study in one of the best management and IT colleges
          in Biratnagar? Students at Nihareeka College of Management and IT will
          know. First, get to know more about the college.
        </h5>
      </div>

      <div className="container about__secondary__col">
        <h3>How did Nihareeka College come to be?</h3>
        <div className="container about__main__col mt-4">
          <div className="container about__description">
            <h5>
              <span className="about__full__name">
                Nihareeka College of Management and IT
              </span>
              &nbsp; located at Bargachi, Biratnagar is top college of EDR. The
              college has been running BBS and MBS (with 100 % success results)
              and is also running BCA and Bsc.CSIT along with the core values of
              professional courses, mandatory internship in the IT industry and
              Job Placement.
              <br />
              <br />
              Nihareeka was found with a set of academicians and entrepreneurs
              to meet the rising demand for qualified and skilled manpower in
              the field of Science and Technology, Management along with Hotel
              Management, and Humanities. Since its very inception, Nihareeka
              remains an invitation to learning by both theory and practice.
              <br />
              <br />
              Professors, readers, lecturers, and scholars in their respective
              fields contribute to making Texas College one of the best in the
              industry.
              <br />
              <br />
              One of the major global partners and contributors of the college
              is Tribhuwan University, in affiliation with which we’ve designed
              most of our courses.
            </h5>
          </div>
        </div>
      </div>

      <div className="container about__secondary__col">
        <h3 className="my-4">Why To Join Nihareeka?</h3>
        <div className="container aboutus__main__col">
          <CheckCircleOutlinedIcon className="aboutus__main__icon" />
          <h5>
            Centrally located, easily accessible from and around Biratnagar
            bestowed with a serene environment free from the crowd, noise, and
            pollution.
          </h5>
        </div>
        <div className="container aboutus__main__col">
          <CheckCircleOutlinedIcon className="aboutus__main__icon" />
          <h5>
            Enriched information center with an adequate collection of
            textbooks, reference books, journals, newspapers, research reports,
            and the like.
          </h5>
        </div>
        <div className="container aboutus__main__col">
          <CheckCircleOutlinedIcon className="aboutus__main__icon" />
          <h5>
            Student individual ID to facilitate online teaching/learning
            activities.
          </h5>
        </div>
        <div className="container aboutus__main__col">
          <CheckCircleOutlinedIcon className="aboutus__main__icon" />
          <h5>
            Counseling Cell is driven by well exposed and experienced
            personality to assist the students in academic and personal
            endeavors.
          </h5>
        </div>
        <div className="container aboutus__main__col">
          <CheckCircleOutlinedIcon className="aboutus__main__icon" />
          <h5>
            Dedicated and qualified faculties with national and international
            exposures. State-of-art classrooms supported by modern technologies.
          </h5>
        </div>
        <div className="container aboutus__main__col">
          <CheckCircleOutlinedIcon className="aboutus__main__icon" />
          <h5>
            Academic institution nurtured and groomed by dedicated academic,
            corporate, and social personalities.
          </h5>
        </div>
      </div>
    </>
  );
};

export default About;
