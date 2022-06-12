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
      <h1
        style={{
          textAlign: "center",
          color: "#EC008D",
          marginTop: "40px",
          fontSize: "30px",
          marginBottom: "-5px",
        }}
      >
        <span style={{ color: "#2C398D" }}>
          <a
            href="https://drive.google.com/file/d/1ndx3UzfERPV6gq9ssUWtIs9mAQipjVzH/view?usp=drivesdk"
            target={"_blank"}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Click here
          </a>
          ,
        </span>
        <b> to View our Brochures</b>
      </h1>
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
              &nbsp; located at Bargachhi, Biratnagar is top college of Province
              1. The college has been running Bsc.CSIT, BHM, BBS and MBS (with
              100 % success results) and is also running BCA and BIM along with
              the core values of professional courses, mandatory internship in
              the IT industry and Job Placement.
              <br />
              <br />
              Nihareeka was found with a set of academicians and entrepreneurs
              to meet the rising demand for qualified and skilled manpower in
              the field of Science and Technology, Management along with Hotel
              Management, and Humanities. Since its very inception, Nihareeka
              remains an invitation to learning by both theory and practice.
              <br />
              <br />
              Teacher qualifications have a direct positive correlation with
              student achievement. Measures of teacher preparation and
              certification are by far the strongest predictors of student
              achievement in any field. Students simply perform better if their
              teachers are knowledgeable. At Nihareeka, we have established a
              mantra that our teachers need to be highly qualified in their
              field of study. We believe that the teaching professionals must
              raise the overall level of their teaching in order to promote the
              greatest student achievement. The change from semi-professional to
              true professional stature of a teacher is what must happen for
              students to fully benefit from their education. Just as doctors,
              lawyers, accountants and even soldiers must continue their
              education in order to keep abreast of the latest and greatest ways
              to do their jobs effectively and proficiently, so must teachers in
              this new era of teaching. Our faculty of teachers not only know
              the content of what they are teaching, but also represent an
              understanding of the subject matter far beyond what will be
              covered in the classroom.
              <br />
              <br />
              No organization can survive on its own. To ensure that our
              students get their best during and after their session at
              Nihareeka, we have various official and unofficial links and tie
              ups with national and international organizations. The technical
              faculties like BSC CSIT, BIM and BCA get personalized training by
              our official internship partner F1Soft International. Commonly
              heard brand names like ESewa and Sudrisya Academy are our partners
              that ensure proper job placement and future of our students. Our
              hotel management students can train and take internships on
              SoalteeCrowne Plaza, and we have international tie-up with Jaffair
              Grand hotel in China for special students with merits. One of the
              major global partners and contributors of the college is Tribhuwan
              University, in affiliation with which we’ve designed most of our
              courses.
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
