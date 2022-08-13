import React, { useState } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SubFooter from "./SubFooter";
import axios from "axios";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email Cannot Be Empty");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        toast.error("Email must be a Valid Email");
      } else {
        try {
          const { data } = await axios.post(
            "http://68.183.17.93:4003/api/v1/newsletter",
            { email }
          );
          console.log(data);
          toast.success("Signup Successful");
          setEmail("");
        } catch (error) {
          toast.error(error.response.data);
          setEmail("");
        }
      }
    }
  };

  return (
    <>
      <div
        className="container-fluid mt-5 footer__main__app"
        style={{ backgroundColor: "#2C398D" }}
      >
        <div
          className=" mt-10"
          style={{ marginTop: "30px", marginLeft: "25px" }}
        >
          <div className="row footer__row__main">
            <div className="col-md-4 col-12" style={{ marginTop: "30px" }}>
              <SubFooter
                heading="Quick Contact"
                link1="nihareekacollegebrt@gmail.com"
                link2="021-512863 , 021-512864"
                link3="Chadani Marg,Bargachhi"
                link4="6:15 AM - 12:00 PM"
                linkto5=""
              />{" "}
            </div>
            <div className="col-md-2 col-6" style={{ marginTop: "30px" }}>
              <SubFooter
                heading="Faculties"
                link1="BSc.CSIT"
                linkto1="/faculty/csit"
                link4="BIM"
                linkto4="faculty/bim"
                link2=" BCA"
                linkto2="faculty/bca"
                link3="BHM"
                linkto3="faculty/bhm"
                link5="BBS"
                linkto5="faculty/bbs"
                link6="MBS"
                linkto6="faculty/mbs"
              />{" "}
            </div>

            <div className="col-md-2 col-6" style={{ marginTop: "30px" }}>
              {" "}
              <SubFooter
                heading="Links"
                link1="Home"
                linkto1="/"
                link2="Gallery"
                linkto2="/gallery"
                link3="About Us"
                linkto3="/about-us"
                link4="News & Notice"
                linkto4="/news-event"
                link5="Contact Us"
                linkto5="/contact-us"
              />
            </div>
            <div className="col-md-4 col-12 newsletter">
              <section className="text-gray-600 body-font colorr">
                <div className="container px-1 py-2 mx-auto">
                  <div className="flex flex-col text-center w-full mb-1">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
                      Sign Up For Newsletter
                    </h1>
                  </div>
                  <div className="flex lg:w-3/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                      <label htmlFor="email" className=" text-lg text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        s
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-300 py-1 px-1 leading-5 transition-colors duration-200 ease-in-out"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className=" text-white bg-pink-600 border-0 py-2 px-2 focus:outline-none hover:bg-pink-800 rounded text-lg"
                      onClick={handleClick}
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer className="page-footer font-small special-color-dark pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-12 social__media">
                <h5 style={{ color: "white" }}>
                  Follow us on:
                  <a
                    href="https://www.facebook.com/niharika.csit"
                    target="_blank"
                  >
                    <FacebookIcon
                      fontSize="large"
                      className="contact__facebook "
                    />
                  </a>
                  <a href="https://np.linkedin.com/" target="_blank">
                    <LinkedInIcon
                      fontSize="large"
                      className="contact__LinkedIn"
                    />
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="mb-3 footer-copyright text-center py-3"
            style={{ backgroundColor: "#D90081", color: "white" }}
          >
            © 2022 Copyright :
            <span>
              {" "}
              Designed and Developed by: Rajat Gautam , Samrat Ojha & Aman
              Rajbanshi.
            </span>
          </div>
          <div className="container-fluid footer__bottom__last"></div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
